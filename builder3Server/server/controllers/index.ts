import { indexController } from "./index.controller";
import { builderLogsClearController } from "./builderLogsClear.controller";
import { builderRunController } from "./builderRun.controller";
import { builderLogsController } from "./builderLogs.controller";
import { clearEverythingController } from "./clearEverything.controller";
import { Controller } from "../models/controller.model";

export {
  indexController,
  builderLogsController,
  builderRunController,
  builderLogsClearController,
  clearEverythingController
};

export const Controllers: Controller[] = [
  indexController,
  builderLogsClearController,
  builderRunController,
  builderLogsController,
  clearEverythingController
];