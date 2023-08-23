import fs from "fs";

let config: any = null;

export const getConfig = (): any => {
  if (config) return config;
  config = JSON.parse(fs.readFileSync("./builder/config.json", "utf-8")) as any;
  return config;
};
