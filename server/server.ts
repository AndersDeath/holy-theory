import express, { Express, Request, Response } from "express";
import {exec, execFile} from 'child_process';
import fs from 'fs-extra';

const app: Express = express();
const port = 3000;

app.use(express.static('static'));

app.get("/builder", (req: Request, res: Response) => {
  const page = fs.readFileSync('./server/templates/builder.html','utf-8');
  res.send(page);
});

app.get("/builder/run", (req: Request, res: Response) => {
  console.log('the builder is run');
  try {
    execFile(`./scripts/generate_all.sh`, [], (error: any, stdout: any, stderr: any) => {
      console.log('exec works');
      console.log(error);
      console.log(stdout);
      res.redirect('/builder');
   });
  } catch(e) {
    console.log(e);
  }
 
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});