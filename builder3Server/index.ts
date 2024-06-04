import express, { Express } from "express";
import { routesInit } from "./server/bootstrap";

const app: Express = express();
const port = 3000;

routesInit(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
