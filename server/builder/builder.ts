import * as fs from "fs-extra";
import * as path from "path";
import { Config, RawContent } from "./models/interfaces";

export class Builder {
  parseMDLib: any;
  rawContent: RawContent[] = [];
  config: Config = {
    rootFolder: "",
  };

  constructor(config: Config) {
    this.config = config;
  }

  run() {
    this.parseMDInit(() => this.init());
  }

  async init() {
    const folders: string[] = await fs.readdir(this.config.rootFolder);
    for (const folder of folders) {
      const folderPath: string = path.join(this.config.rootFolder, folder);
      if (fs.statSync(folderPath).isDirectory()) {
        const rawContentArr: string[] = await this.parseFolder(folderPath);
        const parsedContentWithCategory: RawContent[] =
          await this.parseRawContent(folder, rawContentArr);
        this.rawContent = [...this.rawContent, ...parsedContentWithCategory];
      }
    }
  }

  parseMDInit(callback: () => void) {
    import("parse-md").then((module) => {
      const parseMD = module.default;
      this.parseMDLib = parseMD;
      callback();
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
}
