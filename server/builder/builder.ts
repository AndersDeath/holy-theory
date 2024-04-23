import * as fs from "fs-extra";
import * as path from "path";

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
    let allParsedContent: any = [];
    for (const folder of folders) {
      const folderPath = path.join(rootFolder, folder);
      if (fs.statSync(folderPath).isDirectory()) {
        const rawContentArr = await this.parseFolder(folder, folderPath);
        const parsedContentWithCategory = await this.parseRawContent(
          folder,
          rawContentArr
        );
        allParsedContent = [...allParsedContent, ...parsedContentWithCategory];
      }
    }
    console.log(allParsedContent.length);
  }

  parseMDInit(callback: () => void) {
    import("parse-md").then((module) => {
      const parseMD = module.default;
      this.parseMDLib = parseMD;
      callback();
    });
  }

  parseRawContent(category: string, rawContentArr) {
    const output: any = [];
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

  async parseFolder(folder: any, folderPath: any) {
    const content: any = [];
    const sectionName = folder.replace(/ /g, "-");
    const sectionOutputFolder = path.join(
      this.config.outputFolder,
      sectionName
    );
    await fs.mkdirp(sectionOutputFolder);

    const files = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);

      if (path.extname(file) === ".md") {
        const pieceOfContent = await fs.readFile(filePath, "utf-8");
        content.push(pieceOfContent);
      }
    }
    return content;
  }
}
