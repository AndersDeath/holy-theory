import * as path from "path";

import {
  Logger,
  MD_PARSE_READY,
  POST_BUILD_INIT,
  PREBUILD_INIT,
} from "./logger/logger";
import { generateStatic } from "./generateStatic";

const logger = Logger.getInstance();

const preBuild = () => {
  logger.info(PREBUILD_INIT);
};

const postBuild = () => {
  logger.info(POST_BUILD_INIT);
};

export const Builder = (type: string) => {
  preBuild();
  import("parse-md").then((module) => {
    const parseMD = module.default;
    logger.info(MD_PARSE_READY);
    const rootContentFolder = path.join(__dirname, "../content");

    const outputFolder =
      type === "md"
        ? path.join(__dirname, "../content")
        : path.join(__dirname, "../static");

    generateStatic(rootContentFolder, outputFolder, parseMD, type)
      .then(() => {
        console.timeEnd(type + " builder");
        logger.log(
          `${
            type === "md" ? "Markdown" : "HTML"
          } static website generated successfully`
        );
        postBuild();
      })
      .catch((err) => {
        console.timeEnd(type + " builder");
        console.error(
          `Error generating ${
            type === "md" ? "Markdown" : "HTML"
          } static website:`,
          err
        );
        postBuild();
      });
  });
};
