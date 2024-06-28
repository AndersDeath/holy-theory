import { Request, Response } from "express";
import { Controller } from "../models/controller.model";

export const builderLogsController: Controller = {
  route: "/builder/api",
  method: "POST",
  controller: async (req: Request, res: Response): Promise<void> => {
    res.send({ response: "this is api " });
  }
};
