import express, { Request, Response } from "express";
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
};
