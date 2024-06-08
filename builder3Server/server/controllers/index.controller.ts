import fs from "fs-extra";
import { Request, Response } from "express";
import { B3 } from "../b3";

export const indexController = {
    route: '/',
    controller: (req: Request, res: Response) => {
        const categories = B3.categories;
        const targets = B3.targets;
        res.render("pages/index", { categories, targets });
    }
}