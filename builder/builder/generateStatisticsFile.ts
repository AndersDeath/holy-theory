import { buildHeadline, buildListItem, htmlPageWrapper } from "../ui";
import * as fs from "fs-extra";
import * as path from "path";

export const generateStatisticsFile = async (lm, type, outputFolder) => {
  const languageSource = Object.fromEntries(lm.get());

  let outputList = "";
  for (const [key, value] of Object.entries(languageSource)) {
    outputList += buildListItem(`${key}: ${value}`, type) + "\n";
  }

  let output = [
    buildHeadline("Statistics", 1, type),
    buildHeadline("Languages", 2, type),
    outputList,
  ].join("\n\r");

  if (type === "html") {
    output = htmlPageWrapper(output);
  }

  await fs.writeFile(path.join(outputFolder, "statistics." + type), output);
};
