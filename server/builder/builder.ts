export class Builder {
  constructor(config: any) {
    console.log("Builder started");
  }

  run() {
    this.parseMDInit(this.parseFolder);
  }

  parseFolder(parseMD: any) {
    console.log(parseMD);
  }

  parseMDInit(callback: (parseMD) => void) {
    import("parse-md").then((module) => {
      const parseMD = module.default;
      callback(parseMD);
    });
  }
}
