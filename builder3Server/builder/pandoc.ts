const util = require("util");
const exec = util.promisify(require("child_process").exec);

interface PandocInput {
  inputPath: string;
  outputPath: string;
  metadataFile?: string;
  isTableOfContents?: boolean;
}

export class Pandoc {
  constructor() {
  }

  async generate(input: PandocInput) {
    const cmd = this.createCommand(input);
    const { stdout, stderr } = await exec(cmd);
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);
  }

  createCommand(input: PandocInput): string {
    return `pandoc ${input.inputPath} -o ${input.outputPath} ${
      input.isTableOfContents ? "--table-of-contents" : ""
    } ${
      input.metadataFile ? `--metadata-file=${input.metadataFile}` : ""
    } -V geometry:margin=1in --highlight-style tango`;
  }
}

// const pandoc = new Pandoc();
// pandoc.generate({
//   inputPath: "static/prepared_all_algorithms.html",
//   outputPath: "pdf/output_from_html_algorithms.pdf",
//   isTableOfContents: true,
//   metadataFile: "meta/handbook_algorithms.yaml",
// });
