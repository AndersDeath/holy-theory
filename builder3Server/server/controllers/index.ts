import { indexController } from "./index.controller";
import { builderLogsClearController } from "./builderLogsClear.controller";
import { builderRunController } from "./builderRun.controller";
import { builderLogsController } from "./builderLogs.controller";
import { clearEverythingController } from "./clearEverything.controller";
import { builderApiController } from "./api/builderApi.controller";
import { Controller } from "../models/controller.model";

export {
  indexController,
  builderLogsController,
  builderRunController,
  builderLogsClearController,
  clearEverythingController,
  builderApiController
};

export const Controllers: Controller[] = [
  indexController,
  builderLogsClearController,
  builderRunController,
  builderLogsController,
  clearEverythingController,
  builderApiController
];