import fs from "fs-extra";
import { Request, Response } from "express";

export const builderLogsController = {
    route: "/builder/logs",
    controller: (req: Request, res: Response) => {
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
    }
}