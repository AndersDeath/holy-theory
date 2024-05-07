import { Builder } from "./builder/builder";

const builder = new Builder({
  sourceRootPath: "./content",
  htmlOutputPath: "./static2",
  markdownOutputPath: "./markdown2",
});

await builder.run();
