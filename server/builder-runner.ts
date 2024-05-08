import { Builder } from "./builder/builder";

console.time("Builder working timer");

const builder = new Builder({
  sourceRootPath: "./content",
  htmlOutputPath: "./static2",
  markdownOutputPath: "./markdown2",
});

builder.run().then(() => {
  console.log("The work of script finished");
  console.timeEnd("Builder working timer");
});
