import express, { Request, Response } from "express";
import fs from "fs-extra";

import { Builder3 } from "../builder/builder";
import { Logger } from "../builder/logger/logger";
import { indexController } from "./controllers/index.controller";

export const routesInit = (app: any) => {

    const B3 = new Builder3({
        sourceRootPath: "./content",
        htmlOutputPath: "./static2",
        markdownOutputPath: "./markdown2",
        tempFolderPath: "./temp",
        imageFolderPath: "./images",
    });

    app.use("/static", express.static("static"));

    app.get("/", (req: Request, res: Response) => {
        indexController(req, res)
    });

    app.get("/builder/logs", (req: Request, res: Response) => {
        const page = fs.readFileSync("./builder3Server/templates/logs.html", "utf-8");
        const logFile = fs.readFileSync("./builder3-logs.log", "utf-8");
        let logs = "<div>";
        logFile.split("\n").forEach((element) => {
            logs += element + "</br>";
        });
        logs += "</div>";

        const replaceKey = /put_logs_here/g;
        const output = page.replace(replaceKey, logs);
        res.send(output);
    });

    app.get("/builder/logs/clear", async (req: Request, res: Response) => {
        const logger = new Logger();
        await logger.clearLogs();
        res.redirect("/builder/logs");
    });

    app.get("/builder/run", (req: Request, res: Response) => {
        let targets = [];
        let categories = [];
        if (req.query.targets) {
            targets = req.query.targets.toString().split(",");
        }
        if (req.query.categories) {
            targets = req.query.categories.toString().split(",");
        }

        const page = fs.readFileSync(
            "./builder3Server/templates/generation-run.html",
            "utf-8"
        );
        const logger = new Logger();
        logger.log("The Builder Runner has started!");
        logger.time("Builder working timer");

        B3.run({
            targets,
            bookSettings: {
                categories,
            },
        }).then(() => {
            logger.log("The work of script finished");
            logger.timeEnd("Builder working timer");
        });

        res.send(page);
    });

    app.get("/clear-everything", async (req: Request, res: Response) => {
        await fs.remove("./static2");
        await fs.remove("./markdown2");
        await fs.remove("./temp");
        await fs.remove("./builder3-logs.log");
        res.redirect("/");
    });

};
