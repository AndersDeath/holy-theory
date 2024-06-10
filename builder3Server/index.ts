import express, { Express } from "express";
import { routesInit } from "./server/bootstrap";
import path from 'path';

const app: Express = express();
const port = 3000;
app.set('views', path.join(__dirname, './server/views/'))

app.set('view engine', 'ejs');

routesInit(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
