import express, { Request, Response } from "express";
import { indexController } from "./controllers/index.controller";
import { builderLogsController } from "./controllers/builderLogs.controller";
import { builderLogsClearController } from "./controllers/builderLogsClear.controller";
import { builderRunController } from "./controllers/builderRun.controller";
import { clearEverythingController } from "./controllers/clearEverything.controller";
import { Controllers } from "./controllers";

export const routesInit = (app: any): void => {

  app.use("/static", express.static("static"));

  Controllers.forEach((element): void => {
    if (element.method === "GET") {
      app.get(element.route, async (req: Request, res: Response): Promise<void> => {
        await element.controller(req, res);
      });
    }
  });
  //
  // app.get(indexController.route, (req: Request, res: Response): void => {
  //   indexController.controller(req, res);
  // });
  //
  // app.get(builderLogsController.route, (req: Request, res: Response): void => {
  //   builderLogsController.controller(req, res);
  // });
  //
  // app.get(builderLogsClearController.route, async (req: Request, res: Response): Promise<void> => {
  //   await builderLogsClearController.controller(req, res);
  // });
  //
  // app.get(builderRunController.route, (req: Request, res: Response): void => {
  //   builderRunController.controller(req, res);
  // });
  //
  // app.get(clearEverythingController.route, async (req: Request, res: Response): Promise<void> => {
  //   await clearEverythingController.controller(req, res);
  // });

};
