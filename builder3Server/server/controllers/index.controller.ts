import { Request, Response } from "express";
import { B3 } from "../b3";

export const indexController = {
  route: "/",
  method: "GET",
  controller: async (req: Request, res: Response): Promise<void> => {
    const categories: string[] = B3.categories;
    const targets: string[] = B3.targets;
    res.render("pages/index", { categories, targets });
  }
};