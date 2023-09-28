import * as fs from "fs-extra";
import * as path from "path";
import {
  buildHeader,
  buildLink,
  buildList,
  buildListItems,
  htmlPageWrapper,
} from "./ui";
import { marked } from "./libs/marked";
import { cleanContent } from "./libs/utils";
import { LanguageMap } from "./libs/language-map";
import { Entry } from "./interfaces";

function generateSectionReadmes(
  contentBySection: Record<string, string[]>,
  type = "md"
): string {
  return Object.keys(contentBySection)
    .map((section) => {
      const sectionContent = contentBySection[section].join("\n");
      return `${buildHeader(section, 2, type)}\n\n${sectionContent}`;
    })
    .join("\n\n");
}

const generateGlobalIndex = async (
  allContentWithSections: Entry[],
  outputPath: string,
  type = "md"
) => {
  const globalReadmeContent = allContentWithSections.reduce((acc, entry) => {
    if (entry.section) {
      if (!acc[entry.section]) {
        acc[entry.section] = [];
      }
      acc[entry.section].push(
        buildListItems(buildLink(entry.title, entry.link, type), type)
      );
    }
    return acc;
  }, {} as Record<string, string[]>);

  let sectionReadmes =
    buildHeader("Holy Theory", 1, type) +
    "\n\n" +
    generateSectionReadmes(globalReadmeContent, type);

  if (type === "html") {
    sectionReadmes = htmlPageWrapper(sectionReadmes);
  }
  await fs.writeFile(outputPath, sectionReadmes);
};

const createSectionFile = (path: string, content, type = "md") => {
  if (type === "md") {
    fs.writeFileSync(path, content);
  }

  if (type === "html") {
    fs.writeFileSync(
      path,
      htmlPageWrapper(marked.parse(cleanContent(content)))
    );
  }
};

async function generateStatic(
  rootFolder: string,
  outputFolder: string,
  parseMd: any,
  type = "md"
): Promise<void> {
  const folders = await fs.readdir(rootFolder);

  const allContentWithSections: Entry[] = [];

  const lm = new LanguageMap();

  for (const folder of folders) {
    const folderPath = path.join(rootFolder, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      const sectionName = folder.replace(/ /g, "-");
      const sectionOutputFolder = path.join(outputFolder, sectionName);
      await fs.mkdirp(sectionOutputFolder);

      const files = await fs.readdir(folderPath);

      for (const file of files) {
        const filePath = path.join(folderPath, file);

        if (path.extname(file) === ".md") {
          const markdownContent = await fs.readFile(filePath, "utf-8");
          const { metadata, content }: any = parseMd(markdownContent);

          if (type === "html" && metadata.languages?.length > 0) {
            lm.setFromArr(metadata.languages);
          }

          const entryName = file.replace(/\.[^.]+$/, "");
          const entryLink = `./${entryName}.` + type;

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.${type}`
          );

          createSectionFile(
            entryOutputPath,
            type === "md" ? markdownContent : content,
            type
          );

          allContentWithSections.push({
            title: metadata.title || sectionName + " all",
            link:
              type === "md"
                ? `./content/${sectionName}/${entryName}.${type}`
                : `./${sectionName}/${entryName}.${type}`,
            entryLink: entryLink,
            section: sectionName,
          });
        }
      }

      const sectionContent = await buildList(
        allContentWithSections.filter((e: Entry) => e.section === sectionName),
        type
      );

      const sectionIndexOutputPath = path.join(
        sectionOutputFolder,
        "index." + type
      );

      await fs.writeFile(sectionIndexOutputPath, sectionContent);
    }
  }

  if (type === "md")
    await generateGlobalIndex(
      allContentWithSections,
      path.join(outputFolder, "../readme.md"),
      "md"
    );
  if (type === "html")
    await generateGlobalIndex(
      allContentWithSections,
      path.join(outputFolder, "index.html"),
      "html"
    );
}

export const Builder = (type: string) => {
  import("parse-md").then((module) => {
    const parseMD = module.default;
    const rootContentFolder = path.join(__dirname, "../content");

    const outputFolder =
      type === "md"
        ? path.join(__dirname, "../content")
        : path.join(__dirname, "../static");

    generateStatic(rootContentFolder, outputFolder, parseMD, type)
      .then(() =>
        console.log(
          `${
            type === "md" ? "Markdown" : "HTML"
          } static website generated successfully`
        )
      )
      .catch((err) =>
        console.error(
          `Error generating ${
            type === "md" ? "Markdown" : "HTML"
          } static website:`,
          err
        )
      );
  });
};
