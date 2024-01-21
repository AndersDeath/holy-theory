import { ContentEntity, ContentEntityModel } from "../models/ContentEntity";
import {
  buildHeadline,
  buildLink,
  buildListItem,
  htmlPageWrapper,
} from "../ui";
import { generateSectionReadmes } from "./generateSectionReadmes";
import * as fs from "fs-extra";

export const generateGlobalIndex = async (
  allContentWithSections: ContentEntityModel[],
  outputPath: string,
  type = "md"
) => {
  const globalReadmeContent = allContentWithSections.reduce((acc, entry) => {
    if (entry.section) {
      if (!acc[entry.section]) {
        acc[entry.section] = [];
      }
      acc[entry.section].push(
        buildListItem(buildLink(entry.title, entry.link, type), type)
      );
    }
    return acc;
  }, {} as Record<string, string[]>);

  let sectionReadmes =
    buildHeadline("Holy Theory", 1, type) +
    "\n\n" +
    generateSectionReadmes(globalReadmeContent, type);

  if (type === "html") {
    sectionReadmes = htmlPageWrapper(sectionReadmes);
  }
  await fs.writeFile(outputPath, sectionReadmes);
};
