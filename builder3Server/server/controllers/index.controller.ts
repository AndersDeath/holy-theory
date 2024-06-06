import fs from "fs-extra";
import { Request, Response } from "express";

export const indexController = {
    route: '/',
    controller: (req: Request, res: Response) => {
        const page = fs.readFileSync("./builder3Server/templates/builder.html", "utf-8");
        res.send(page);
    }
}