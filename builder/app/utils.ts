import fs from "fs";
import path from "path";

let config: any = null;

export const getConfig = (): any => {
  if (config) return config;
  config = JSON.parse(fs.readFileSync("./builder/config.json", "utf-8")) as any;
  return config;
};


export function getFiles(dir: string): string[] {
  let results: string[] = [];
  fs.readdirSync(dir).forEach((file) => {
    file = dir + "/" + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      if (path.extname(file) === ".md") {
        results.push(file);
      }
    }
  });
  return results;
}
