import * as fs from "fs-extra";
import * as path from "path";
import { buildHeadline, buildLinksList, htmlPageWrapper } from "./ui";
import { marked } from "./libs/marked";
import { cleanContent } from "./libs/utils";
import { LanguageMap } from "./libs/language-map";
import { ContentEntity } from "./models/ContentEntity";
import { generateTableOfContents } from "./builder/generateTableOfContents";
import { generateGlobalIndex } from "./builder/generateGlobalIndex";
import { createSectionFile } from "./builder/createSectionFile";
import { generateStatisticsFile } from "./builder/generateStatisticsFile";
import { createContentEntity } from "./builder/createContentEntity";

const generateStatic = async (
  rootFolder: string,
  outputFolder: string,
  parseMd: any,
  type = "md"
): Promise<void> => {
  const folders = await fs.readdir(rootFolder);

  const allContentWithSections: ContentEntity[] = [];

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

          if (metadata.languages?.length > 0) {
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

          allContentWithSections.push(
            createContentEntity(
              metadata,
              sectionName,
              type,
              entryName,
              entryLink,
              content
            )
          );
        }
      }

      await fs.writeFile(
        path.join(sectionOutputFolder, "index." + type),
        await buildLinksList(
          allContentWithSections.filter(
            (e: ContentEntity) => e.section === sectionName
          ),
          type
        )
      );
    }
  }

  await generateStatisticsFile(lm, type, outputFolder);

  allContentWithSections.push(
    new ContentEntity(
      "statistics",
      "./content/statistics." + type,
      "./statistics." + type,
      "Statistics",
      "",
      "collection"
    )
  );

  allContentWithSections.push(
    new ContentEntity(
      "All",
      "./content/all." + type,
      "./all." + type,
      "All content",
      "",
      "collection"
    )
  );

  let allOutput = buildHeadline("Holy Theory project", 1, type) + "\n";
  let allAlgorithms =
    type === "md"
      ? "\n\\newpage \n\n"
      : '<p style="page-break-after: always;"> </p>';
  const headerRegex = /^#\s+(.+)/gm;

  let prevSection = "";
  const algorithmsBucket = [];
  allContentWithSections.forEach((e: ContentEntity) => {
    if (
      e.type === "content" &&
      e.section.toLowerCase() === "algorithms" &&
      !e.ignore
    ) {
      algorithmsBucket.push(e);
    }
    if (e.type === "content") {
      if (prevSection !== e.section) {
        prevSection = e.section;
        allOutput += buildHeadline(e.section, 2, type) + "\n";
      }
      allOutput += buildHeadline(e.title, 3, type) + "\n";
      e.content ? (allOutput += e.content.replace(headerRegex, "")) : "";
    }
  });

  algorithmsBucket.sort((a, b) => {
    return a.sort - b.sort;
  });

  algorithmsBucket.forEach((e) => {
    if (type === "md") {
      allAlgorithms += buildHeadline(e.title.trim(), 1, type) + "\n";
    }
    e.content ? (allAlgorithms += e.content.replace(headerRegex, "")) : "";

    const regex: RegExp = /<!-- ignore start -->(.*?)<!-- ignore end -->/gs;
    e.content = e.content.replace(regex, "");

    allAlgorithms +=
      type === "md"
        ? "\n\\newpage \n\n"
        : '<p style="page-break-after: always;"> </p>';
  });

  allOutput = generateTableOfContents(allOutput, type) + allOutput;
  if (type === "html") {
    allOutput = htmlPageWrapper(allOutput);
  }
  const preparedOutput = allOutput.replace(
    /https:\/\/raw\.githubusercontent\.com\/AndersDeath\/holy-theory\/main\/images/g,
    path.join("./", "images")
  );
  const preparedOutput2 = allAlgorithms.replace(
    /https:\/\/raw\.githubusercontent\.com\/AndersDeath\/holy-theory\/main\/images/g,
    path.join("./", "images")
  );
  // const preparedOutput = allOutput;

  allOutput = generateTableOfContents(allOutput) + allOutput;
  // preparedOutput = preparedOutput.replace(/\$/g, "\\$");
  // preparedOutput = preparedOutput.replace(/frac{/g, '"Temporary removed"');

  // \(\frac{n \times (n + 1) \times (2n + 1)}{6}\).
  // \(\frac{n \times (n + 1)}{2}\).

  await fs.writeFile(
    path.join(outputFolder, "prepared_all." + type),
    preparedOutput
  );

  await fs.writeFile(
    path.join(outputFolder, "prepared_all_algorithms." + type),
    preparedOutput2
  );
  // }

  await fs.writeFile(path.join(outputFolder, "all." + type), allOutput);

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
};

export const Builder = (type: string) => {
  import("parse-md").then((module) => {
    const parseMD = module.default;
    const rootContentFolder = path.join(__dirname, "../content");

    const outputFolder =
      type === "md"
        ? path.join(__dirname, "../content")
        : path.join(__dirname, "../static");

    generateStatic(rootContentFolder, outputFolder, parseMD, type)
      .then(() => {
        console.timeEnd(type + " builder");
        console.log(
          `${
            type === "md" ? "Markdown" : "HTML"
          } static website generated successfully`
        );
      })
      .catch((err) => {
        console.timeEnd(type + " builder");
        console.error(
          `Error generating ${
            type === "md" ? "Markdown" : "HTML"
          } static website:`,
          err
        );
      });
  });
};
