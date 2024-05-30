const util = require("util");
const exec = util.promisify(require("child_process").exec);

class Pandoc {
  constructor() {}

  async run() {
    const { stdout, stderr } = await exec("pandoc --help");
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);
  }
}

const pandoc = new Pandoc();
pandoc.run();
