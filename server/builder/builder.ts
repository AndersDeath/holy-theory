import * as fs from "fs-extra";
import * as path from "path";

export class Builder {
  config = {
    outputFolder: "",
  };
  constructor(config: any) {
    console.log("Builder started");
    this.config = config;
  }

  run() {
    this.parseMDInit((parseMD) => {
      this.init(parseMD, "./");
    });
  }

  async init(parseMD: any, rootFolder: string) {
    const folders = await fs.readdir(rootFolder);
    for (const folder of folders) {
      const folderPath = path.join(rootFolder, folder);
      if (fs.statSync(folderPath).isDirectory()) {
       const content =  await this.parseFolder(folder, folderPath);
      //  console.log(content.length);
      }
    }
  }

  parseMDInit(callback: (parseMD) => void) {
    import("parse-md").then((module) => {
      const parseMD = module.default;
      callback(parseMD);
    });
  }

  async parseFolder(folder: any, folderPath: any) {
    const content:any = [];
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
        console.log(pieceOfContent)
        content.push(pieceOfContent);
      }
    }
    console.log(content.length)
    return content;
  }
}
