import * as fs from "fs-extra";
import * as path from "path";
import { Config, RawContent } from "./models/interfaces";
import { pageWrapperHtml } from "./ui/page-wrapper.html";
import { marked } from "./libs/marked";
interface File {
  name: string;
  content: string;
}
export class Builder {
  parseMDLib: any;
  rawContent: RawContent[] = [];
  config: Config = {
    sourceRootPath: "",
    htmlOutputPath: "",
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
        const sourceFiles: File[] = await this.parseFolder(folderPath);
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

  parseRawContent(category: string, sourceFiles: File[]) {
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

  async parseFolder(folderPath: any): Promise<File[]> {
    const content: File[] = [];
    const files: string[] = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath: string = path.join(folderPath, file);
      if (path.extname(file) === ".md") {
        const pieceOfContent: string = await fs.readFile(filePath, "utf-8");
        content.push({
          name: file.replace(/\.[^.]+$/, ""),
          content: pieceOfContent,
        });
      }
    }

    return content;
  }

  async buildStaticHtml(): Promise<void> {
    console.log("Build static html");
    const files: any[] = await this.createHtmlFiles();

    for (let index = 0; index < files.length; index++) {
      fs.writeFileSync(
        files[index].path,
        pageWrapperHtml(files[index].content)
      );
    }
  }

  async createCategoryDirectory(categoryName: string): Promise<void> {
    return fs.mkdirp(path.join(this.config.htmlOutputPath, categoryName));
  }

  async createHtmlFiles(): Promise<any[]> {
    const files: any[] = [];

    const contentAggregation: any = new Map();

    for (let i = 0; i < this.rawContent.length; i++) {
      const rawContent: RawContent = this.rawContent[i];

      await this.createCategoryDirectory(rawContent.category);

      files.push({
        path: path.join(
          this.config.htmlOutputPath,
          rawContent.category,
          rawContent.fileName + ".html"
        ),
        content: marked.parse(rawContent.content),
      });

      if (!contentAggregation.get(rawContent.category))
        contentAggregation.set(rawContent.category, "");
      if (!contentAggregation.get("all")) contentAggregation.set("all", "");

      contentAggregation.set(
        rawContent.category,
        contentAggregation.get(rawContent.category) +
          marked.parse(rawContent.content)
      );
      contentAggregation.set(
        "all",
        contentAggregation.get(rawContent.category) +
          marked.parse(rawContent.content)
      );
    }

    const contentAggregationFromMap = Object.fromEntries(contentAggregation);
    Object.keys(contentAggregationFromMap).forEach((key: string) => {
      files.push({
        path:
          key === "all"
            ? path.join(this.config.htmlOutputPath, "all.html")
            : path.join(this.config.htmlOutputPath, key, "all.html"),
        content: marked.parse(contentAggregationFromMap[key]),
      });
    });

    return files;
  }
}
