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
  config: Config;

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
      await this.copyImageFolder();
      return;
    }

    if (rConf.targets && rConf.targets.includes("html"))
      await this.buildStaticHtml();
    if (rConf.targets && rConf.targets.includes("md"))
      await this.buildStaticMD();
    if (rConf.targets && rConf.targets.includes("book")) {
      await this.detectBookBookTemplateCategoriesAndBuild(rConf);
      await this.copyImageFolder();
    }
    return;
  }

  async detectBookBookTemplateCategoriesAndBuild(
    rConf: RunConfig
  ): Promise<void> {
    const categories = rConf.bookSettings?.categories ?? [];
    await Promise.all(
      categories.map((element) => this.buildBookTemplate(element))
    );
  }

  runConfigResolver(runConfig: RunConfig): RunConfig {
    runConfig.targets = runConfig.targets || [];
    runConfig.bookSettings = runConfig.bookSettings || { categories: [] };
    return runConfig;
  }

  async init(): Promise<void> {
    const folders: string[] = await fs.readdir(this.config.sourceRootPath);
    for (const folder of folders) {
      const folderPath: string = path.join(this.config.sourceRootPath, folder);
      if (fs.statSync(folderPath).isDirectory()) {
        const sourceFiles: B3File[] = await this.parseFolder(folderPath);
        const parsedContentWithCategory: RawContent[] = await Promise.all(
          sourceFiles.map((file) => this.parseRawContent(folder, file))
        );
        this.rawContent.push(...parsedContentWithCategory);
      }
    }
    this.logger.log(`${this.rawContent.length} content items are parsed`);
  }

  async parseMDInit(): Promise<any> {
    const module = await import("parse-md");
    const parseMD = module.default;
    return parseMD;
  }

  parseRawContent(category: string, file: B3File): RawContent {
    const { metadata, content }: any = this.parseMDLibInstance(file.content);
    return {
      category,
      metadata,
      content,
      folderPath: "",
      fileName: file.name,
    };
  }

  async parseFolder(folderPath: string): Promise<B3File[]> {
    const files: string[] = await fs.readdir(folderPath);
    const content: B3File[] = [];

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

    for (const file of files) {
      await this.createCategoryDirectory(outputPath, file.category, ["all"]);
      fs.writeFileSync(
        file.path,
        this.config.outputType === OutputFileTypes.HTML
          ? pageWrapperHtml(marked.parse(file.content))
          : marked.parse(file.content)
      );
    }
  }

  async buildBookTemplate(category: string): Promise<void> {
    this.logger.log("Build prepared Html Book Template " + category);
    this.config.targetCategory = category;
    this.config.outputType = OutputFileTypes.HTML;
    const fileGroup = new FileGroup(this.config, this.rawContent);
    const files: B3File[] = await fileGroup.prepareBookTemplateContent(
      "prepared-book-" + category
    );

    fs.mkdirp(this.config.tempFolderPath);
    for (const file of files) {
      file.content = await this.replaceGlobalImagePathToLocal(file.content);
      fs.writeFileSync(file.path, pageWrapperHtml(marked.parse(file.content)));
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

  async copyImageFolder(): Promise<void> {
    await fs.copy(
      this.config.imageFolderPath,
      path.join(this.config.tempFolderPath, "images")
    );
  }

  async replaceGlobalImagePathToLocal(content: string): Promise<string> {
    return content.replace(
      /https:\/\/raw\.githubusercontent\.com\/AndersDeath\/holy-theory\/main\/images/g,
      path.join("./", "images")
    );
  }
}
