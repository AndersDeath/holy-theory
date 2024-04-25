import * as fs from "fs-extra";
import * as path from "path";
interface RawContent {
  category: string;
  metadata: any;
  content: string;
}
export class Builder {
  parseMDLib: any;
  config = {
    outputFolder: "",
  };

  constructor(config: any) {
    this.config = config;
  }

  run() {
    this.parseMDInit(() => {
      this.init("./content");
    });
  }

  async init(rootFolder: string) {
    const folders = await fs.readdir(rootFolder);
    let allParsedContent: RawContent[] = [];
    for (const folder of folders) {
      const folderPath = path.join(rootFolder, folder);
      if (fs.statSync(folderPath).isDirectory()) {
        const rawContentArr = await this.parseFolder(folderPath);
        const parsedContentWithCategory: RawContent[] = await this.parseRawContent(
          folder,
          rawContentArr
        );
        allParsedContent = [...allParsedContent, ...parsedContentWithCategory];
      }
    }
    console.log(allParsedContent);
  }

  parseMDInit(callback: () => void) {
    import("parse-md").then((module) => {
      const parseMD = module.default;
      this.parseMDLib = parseMD;
      callback();
    });
  }

  parseRawContent(category: string, rawContentArr) {
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

  async parseFolder(folderPath: any) {
    const content: string[] = [];
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      if (path.extname(file) === ".md") {
        const pieceOfContent: string = await fs.readFile(filePath, "utf-8");
        content.push(pieceOfContent);
      }
    }

    return content;
  }
}
