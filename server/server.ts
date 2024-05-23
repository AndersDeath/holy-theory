import express, { Express, Request, Response } from "express";
import { spawn } from "child_process";
import fs from "fs-extra";
import { Builder } from "./builder/builder";
import { Logger } from "./builder/logger/logger";

const app: Express = express();
const port = 3000;
app.use(express.static("static"));

app.get("/builder", (req: Request, res: Response) => {
  const page = fs.readFileSync("./server/templates/builder.html", "utf-8");
  res.send(page);
});

app.get("/builder/logs", (req: Request, res: Response) => {
  const page = fs.readFileSync("./builder3-logs.log", "utf-8");
  res.send(page);
})

app.get("/builder/run", (req: Request, res: Response) => {
  const page = fs.readFileSync("./server/templates/generation-run.html", "utf-8");
  const logger = new Logger();
  logger.log("The Builder Runner has started!");
  logger.time("Builder working timer");

  const builder = new Builder({
    sourceRootPath: "./content",
    htmlOutputPath: "./static2",
    markdownOutputPath: "./markdown2",
    tempFolderPath: "./temp",
    imageFolderPath: "./images",
  });

  builder
    .run({
      targets: [],
      bookSettings: {
        categories: ["algorithms", "javascript", "system-design"],
      },
    })
    .then(() => {
      logger.log("The work of script finished");
      logger.timeEnd("Builder working timer");
    });

  res.send(page);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
