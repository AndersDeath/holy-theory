import express, { Request, Response } from "express";
import { indexController } from "./controllers/index.controller";
import { builderLogsController } from "./controllers/builderLogs.controller";
import { builderLogsClearController } from "./controllers/builderLogsClear.controller";
import { builderRunController } from "./controllers/builderRun.controller";
import { clearEverythingController } from "./controllers/clearEverything.controller";

export const routesInit = (app: any) => {

  app.use("/static", express.static("static"));

  app.get(indexController.route, (req: Request, res: Response) => {
    indexController.controller(req, res);
  });

  app.get(builderLogsController.route, (req: Request, res: Response) => {
    builderLogsController.controller(req, res);
  });

  app.get(builderLogsClearController.route, async (req: Request, res: Response) => {
    await builderLogsClearController.controller(req, res);
  });

  app.get(builderRunController.route, (req: Request, res: Response) => {
    builderRunController.controller(req, res);
  });

  app.get(clearEverythingController.route, async (req: Request, res: Response) => {
    await clearEverythingController.controller(req, res);
  });

};
