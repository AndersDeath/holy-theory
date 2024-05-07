import express, { Express, Request, Response } from "express";
import { spawn } from "child_process";
import fs from "fs-extra";

const app: Express = express();
const port = 3000;
app.use(express.static("static"));

app.get("/builder", (req: Request, res: Response) => {
  const page = fs.readFileSync("./server/templates/builder.html", "utf-8");
  res.send(page);
});

app.get("/builder/run", (req: Request, res: Response) => {
  console.log("the builder is run");

  // try {
  //   const process = spawn(`./scripts/generate_all.sh`, []);

  //   process.stdout.on("data", (res: any) => {
  //     console.log("Log: " + res);
  //   });

  //   process.on("close", (code) => {
  //     res.redirect("/builder");
  //   });
  // } catch (e) {
  //   console.log(e);
  // }
  res.send("Test");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
