import fs from "fs";
import path from "path";

let cachedConfig: any = null;

export const getConfig = (): any => {
  if (cachedConfig !== null) {
    return cachedConfig;
  }

  const configFilePath = path.join("./builder", "config.json");

  try {
    const configData = fs.readFileSync(configFilePath, "utf-8");
    cachedConfig = JSON.parse(configData);
    return cachedConfig;
  } catch (error) {
    throw new Error(`Error reading or parsing config.json: ${error.message}`);
  }
};

export function getFiles(dir: string): string[] {
  const results: string[] = [];

  const readDirSync = (directory: string) => {
    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        readDirSync(filePath); // Recursively read subdirectory
      } else if (path.extname(file) === ".md") {
        results.push(filePath);
      }
    }
  };

  readDirSync(dir); // Start reading from the provided directory

  return results;
}

export const cleanContent = (content: any) => {
  content = content.replace("* [Go back](../readme.md)", "");
  return content;
};
