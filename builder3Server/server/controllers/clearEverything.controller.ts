import fs from "fs-extra";
import { Request, Response } from "express";

export const clearEverythingController = {
  route: "/clear-everything",
  controller: async (req: Request, res: Response) => {
    await fs.remove("./static2");
    await fs.remove("./markdown2");
    await fs.remove("./temp");
    await fs.remove("./builder3-logs.log");
    res.redirect("/");
  }
};