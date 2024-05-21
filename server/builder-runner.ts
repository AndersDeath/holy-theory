import { Builder } from "./builder/builder";
import { Logger } from "./builder/logger/logger";

const logger = new Logger();
logger.log("The Builder Runner has started!");
logger.time("Builder working timer");

const builder = new Builder({
  sourceRootPath: "./content",
  htmlOutputPath: "./static2",
  markdownOutputPath: "./markdown2",
  tempFolderPath: "./temp",
  imageFolderPath: "./images",
});

builder
  .run({
    targets: [],
    bookSettings: {
      categories: ["algorithms", "javascript", "system-design"],
    },
  })
  .then(() => {
    logger.log("The work of script finished");
    logger.timeEnd("Builder working timer");
  });
