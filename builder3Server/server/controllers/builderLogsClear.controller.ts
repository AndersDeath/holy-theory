import { Request, Response } from "express";
import { Logger } from "../../builder/logger/logger";

export const builderLogsClearController = {
  route: "/builder/logs/clear",
  method: 'GET',
  controller: async (req: Request, res: Response): Promise<void> => {
    const logger: Logger = new Logger();
    await logger.clearLogs();
    res.redirect("/builder/logs");
  }
};