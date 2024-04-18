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
    console.log(parseMD);
    const folders = await fs.readdir(rootFolder);
    for (const folder of folders) {
      const folderPath = path.join(rootFolder, folder);
      if (fs.statSync(folderPath).isDirectory()) {
        await this.parseFolder(folder, folderPath);
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
    const sectionName = folder.replace(/ /g, "-");
    const sectionOutputFolder = path.join(
      this.config.outputFolder,
      sectionName
    );
    await fs.mkdirp(sectionOutputFolder);

    const files = await fs.readdir(folderPath);

    // for (const file of files) {
    //   await parseFile(file, folderPath, sectionOutputFolder, sectionName);
    // }

    // await fs.writeFile(
    //   path.join(sectionOutputFolder, "index." + type),
    //   await buildLinksList(
    //     allContentWithSections.filter(
    //       (e: ContentEntity) => e.section === sectionName
    //     ),
    //     type
    //   )
    // );
  }
}
