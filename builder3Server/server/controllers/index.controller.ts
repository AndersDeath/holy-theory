import { Request, Response } from "express";
import { B3 } from "../b3";

export const indexController = {
  route: "/",
  controller: (req: Request, res: Response): void => {
    const categories: string[] = B3.categories;
    const targets: string[] = B3.targets;
    res.render("pages/index", { categories, targets });
  }
};