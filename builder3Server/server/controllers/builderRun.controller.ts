import fs from "fs-extra";
import { Request, Response } from "express";
import { Logger } from "../../builder/logger/logger";
import { B3 } from "../b3";

export const builderRunController = {
    route: "/builder/run",
    controller: async (req: Request, res: Response) => {
        let targets = [];
        let categories = [];
        if (req.query.targets) {
            targets = req.query.targets.toString().split(",");
        }
        if (req.query.categories) {
            categories = req.query.categories.toString().split(",");
        }

        console.log(targets)
        console.log(categories)

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
    }
}