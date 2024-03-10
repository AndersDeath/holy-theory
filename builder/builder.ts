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

const generateStaticSuccess = (type: string) => {
  console.timeEnd(type + " builder");
  logger.log(
    `${
      type === "md" ? "Markdown" : "HTML"
    } static website generated successfully`
  );
  postBuild();
};

const genericStaticError = (err: any, type: string) => {
  console.timeEnd(type + " builder");
  console.error(
    `Error generating ${type === "md" ? "Markdown" : "HTML"} static website:`,
    err
  );
  postBuild();
};

const getInputOutputFolders = (type: string) => {
  return [
    path.join(__dirname, "../content"),
    type === "md"
      ? path.join(__dirname, "../content")
      : path.join(__dirname, "../static"),
  ];
};

export const Builder = (type: string) => {
  preBuild();
  import("parse-md").then((module) => {
    const parseMD = module.default;
    logger.info(MD_PARSE_READY);
    const [rootContentFolder, outputFolder] = getInputOutputFolders(type);
    generateStatic(rootContentFolder, outputFolder, parseMD, type)
      .then(() => {
        generateStaticSuccess(type);
      })
      .catch((err) => {
        genericStaticError(err, type);
      });
  });
};
