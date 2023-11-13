console.time("md builder");
console.time("html builder");
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv: any = yargs(hideBin(process.argv)).argv;

import { Builder } from "./builder";

if (argv.md) {
  Builder("md");
}

if (argv.html) {
  Builder("html");
}

if (argv.all) {
  Builder("md");
  Builder("html");
}
