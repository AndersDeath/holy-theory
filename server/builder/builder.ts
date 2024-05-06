import * as fs from "fs-extra";
import * as path from "path";
import { Config, B3File, RawContent } from "./models/interfaces";
import { pageWrapperHtml } from "./ui/page-wrapper.html";
import { FileGroup } from "./file-group";
import { marked } from "./libs/marked";

export class Builder {
  parseMDLib: any;
  rawContent: RawContent[] = [];
  config: Config = {
    sourceRootPath: "",
    htmlOutputPath: "",
    markdownOutputPath: "",
  };

  constructor(config: Config) {
    this.config = config;
  }

  async run(): Promise<void> {
    this.parseMDLib = await this.parseMDInit();
    await this.init();
    await this.buildStaticHtml();
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
      const { metadata, content }: any = this.parseMDLib(file.content);
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
        });
      }
    }

    return content;
  }

  async buildStaticMD(): Promise<void> {
    console.log("Build static md");
    this.config.outputType = "md";
    const fileGroup = new FileGroup(this.config, this.rawContent);
    const files: any[] = await fileGroup.run();
    for (let index = 0; index < files.length; index++) {
      await this.createCategoryDirectory(files[index].category, ["all"]);
      fs.writeFileSync(files[index].path, files[index].content);
    }
  }

  async buildStaticHtml(): Promise<void> {
    console.log("Build static html");
    this.config.outputType = "html";
    const fileGroup = new FileGroup(this.config, this.rawContent);
    const files: any[] = await fileGroup.run();
    for (let index = 0; index < files.length; index++) {
      await this.createCategoryDirectory(files[index].category, ["all"]);
      fs.writeFileSync(
        files[index].path,
        pageWrapperHtml(marked.parse(files[index].content))
      );
    }
  }

  async createCategoryDirectory(
    categoryName: string,
    ignoreList: string[]
  ): Promise<void> {
    if (ignoreList.includes(categoryName)) return;
    return fs.mkdirp(path.join(this.config.htmlOutputPath, categoryName));
  }
}
