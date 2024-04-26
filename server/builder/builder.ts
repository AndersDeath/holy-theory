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
    const files: any[] = [];
    for (let i = 0; i < this.rawContent.length; i++) {
      const rawContent: RawContent = this.rawContent[i];
      await fs.mkdirp(
        path.join(this.config.htmlOutputPath, rawContent.category)
      );
      files.push({
        path: path.join(
          this.config.htmlOutputPath,
          rawContent.category,
          rawContent.fileName + ".html"
        ),
        content: pageWrapperHtml(marked.parse(rawContent.content)),
      });
    }
  }
}
