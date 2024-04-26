import * as fs from "fs-extra";
import * as path from "path";
import { Config, RawContent } from "./models/interfaces";

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
        const rawContentArr: string[] = await this.parseFolder(folderPath);
        const parsedContentWithCategory: RawContent[] =
          await this.parseRawContent(folder, rawContentArr).map(
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

  parseRawContent(category: string, rawContentArr: string[]) {
    const output: RawContent[] = [];
    for (let index = 0; index < rawContentArr.length; index++) {
      const rawContent = rawContentArr[index];
      const { metadata, content }: any = this.parseMDLib(rawContent);
      output.push({
        category,
        metadata,
        content,
        folderPath: "",
      });
    }
    return output;
  }

  async parseFolder(folderPath: any): Promise<string[]> {
    const content: string[] = [];
    const files: string[] = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath: string = path.join(folderPath, file);
      if (path.extname(file) === ".md") {
        const pieceOfContent: string = await fs.readFile(filePath, "utf-8");
        content.push(pieceOfContent);
      }
    }

    return content;
  }

  async buildStaticHtml(): Promise<void> {
    console.log("Build static html");
    console.log(this.config.htmlOutputPath);
    for (let i = 0; i < this.rawContent.length; i++) {
      const rawContent: RawContent = this.rawContent[i];
      await fs.mkdirp(
        path.join(this.config.htmlOutputPath, rawContent.category)
      );
    }
  }
}
