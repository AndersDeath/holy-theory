import * as fs from "fs-extra";
import * as path from "path";
import {
  Config,
  B3File,
  RawContent,
  OutputFileTypes,
  RunConfig,
} from "./models/interfaces";
import { pageWrapperHtml } from "./ui/page-wrapper.html";
import { FileGroup } from "./file-group";
import { marked } from "./libs/marked";
import { Logger } from "./logger/logger";

const RunConfigDefault = {
  targets: [],
  bookSettings: {
    categories: [],
  },
};
export class Builder {
  parseMDLibInstance: any;
  rawContent: RawContent[] = [];
  config: Config = {
    sourceRootPath: "",
    htmlOutputPath: "",
    markdownOutputPath: "",
    tempFolderPath: "",
  };

  logger: Logger = new Logger();

  constructor(config: Config) {
    this.logger.log("Builder constructor is initialized");
    this.config = config;
  }

  async run(runConfig: RunConfig = RunConfigDefault): Promise<void> {
    this.parseMDLibInstance = await this.parseMDInit();

    const rConf = this.runConfigResolver(runConfig);

    await this.init();

    if (runConfig.targets?.length === 0) {
      await this.buildStaticHtml();
      await this.buildStaticMD();
      await this.detectBookBookTemplateCategoriesAndBuild(rConf);
      return;
    }

    if (rConf.targets && rConf.targets.includes("html"))
      await this.buildStaticHtml();
    if (rConf.targets && rConf.targets.includes("md"))
      await this.buildStaticMD();
    if (rConf.targets && rConf.targets.includes("book"))
      await this.detectBookBookTemplateCategoriesAndBuild(rConf);

    return;
  }

  async detectBookBookTemplateCategoriesAndBuild(
    rConf: RunConfig
  ): Promise<void> {
    if ((rConf.bookSettings?.categories ?? []).length > 0) {
      await Promise.all(
        (rConf.bookSettings?.categories ?? []).map((element) =>
          this.buildBookTemplate(element)
        )
      );
    }
  }

  runConfigResolver(runConfig: RunConfig): RunConfig {
    if (!runConfig.targets) runConfig.targets = [];
    if (!runConfig.bookSettings) runConfig.bookSettings = { categories: [] };
    return runConfig;
  }

  async init(): Promise<any> {
    const folders: string[] = await fs.readdir(this.config.sourceRootPath);
    for (const folder of folders) {
      const folderPath: string = path.join(this.config.sourceRootPath, folder);
      if (fs.statSync(folderPath).isDirectory()) {
        const sourceFiles: B3File[] = await this.parseFolder(folderPath);
        const parsedContentWithCategory: RawContent[] =
          await this.parseRawContent(folder, sourceFiles).map(
            (rawContent: RawContent) => {
              rawContent.folderPath = folderPath;
              return rawContent;
            }
          );
        this.rawContent = [...this.rawContent, ...parsedContentWithCategory];
      }
    }
    this.logger.log(`${this.rawContent.length} content items are parsed`);
  }

  async parseMDInit(): Promise<any> {
    return import("parse-md").then((module) => {
      const parseMD = module.default;
      return parseMD;
    });
  }

  parseRawContent(category: string, sourceFiles: B3File[]) {
    const output: RawContent[] = [];
    for (let index = 0; index < sourceFiles.length; index++) {
      const file = sourceFiles[index];
      const { metadata, content }: any = this.parseMDLibInstance(file.content);
      output.push({
        category,
        metadata,
        content,
        folderPath: "",
        fileName: file.name,
      });
    }
    return output;
  }

  async parseFolder(folderPath: any): Promise<B3File[]> {
    const content: B3File[] = [];
    const files: string[] = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath: string = path.join(folderPath, file);
      if (path.extname(file) === ".md") {
        const pieceOfContent: string = await fs.readFile(filePath, "utf-8");
        content.push({
          name: file.replace(/\.[^.]+$/, ""),
          content: pieceOfContent,
          category: file,
          path: filePath,
          sort: 0,
          ignore: false,
        });
      }
    }

    return content;
  }

  async buildStaticMD(): Promise<void> {
    this.logger.log("Build static md");
    await this.buildStatic(OutputFileTypes.MD, this.config.markdownOutputPath);
  }

  async buildStaticHtml(): Promise<void> {
    this.logger.log("Build static html");
    await this.buildStatic(OutputFileTypes.HTML, this.config.htmlOutputPath);
  }

  async buildStatic(outputType: string, outputPath: string): Promise<void> {
    this.config.outputType = outputType;
    const fileGroup = new FileGroup(this.config, this.rawContent);
    const files: B3File[] = await fileGroup.run();

    for (let index = 0; index < files.length; index++) {
      await this.createCategoryDirectory(outputPath, files[index].category, [
        "all",
      ]);
      fs.writeFileSync(
        files[index].path,
        this.config.outputType === OutputFileTypes.HTML
          ? pageWrapperHtml(marked.parse(files[index].content))
          : marked.parse(files[index].content)
      );
    }
  }

  async buildBookTemplate(category: string): Promise<void> {
    this.logger.log("Build prepared Html Book Template");
    this.config.targetCategory = category;
    this.config.outputType = OutputFileTypes.HTML;
    const fileGroup = new FileGroup(this.config, this.rawContent);
    const files: B3File[] = await fileGroup.prepareBookTemplateContent();
    console.log(files.length);
    // console.log(files);
    for (let index = 0; index < files.length; index++) {
      await this.createCategoryDirectory(
        this.config.tempFolderPath,
        files[index].category
      );
      fs.writeFileSync(
        files[index].path,
        pageWrapperHtml(marked.parse(files[index].content))
      );
    }
  }

  async createCategoryDirectory(
    outputPath: string,
    categoryName: string,
    ignoreList: string[] = []
  ): Promise<void> {
    if (ignoreList.includes(categoryName)) return;
    return fs.mkdirp(path.join(outputPath, categoryName));
  }
}
