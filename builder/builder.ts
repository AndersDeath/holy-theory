import * as fs from "fs-extra";
import * as path from "path";
import {
  buildHeadline,
  buildLink,
  buildLinksList,
  buildListItem,
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
      return `${buildHeadline(section, 2, type)}\n\n${sectionContent}`;
    })
    .join("\n\n");
}

function generateTableOfContents(markdownContent: string, type = "md"): string {
  const renderer = new marked.Renderer();
  let tableOfContents = "";

  renderer.heading = function (text, level, raw) {
    const anchor = text.toLowerCase().replace(/[^\w]+/g, "-");
    let indentation = "  ".repeat(level - 1);
    if (level > 1) {
      indentation += "- ";
    }
    tableOfContents += `${indentation}[${text}](#${anchor})\n`;
    return `<h${level} id="${anchor}">${text}</h${level}>\n`;
  };

  marked(markdownContent, { renderer });
  console.log(tableOfContents);
  if (type === "html") {
    return `<div class="table-of-contents">\n${tableOfContents}</div>`;
  } else {
    return tableOfContents;
  }
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

const generateStatisticsFile = async (lm, type, outputFolder) => {
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

          allContentWithSections.push({
            title: metadata.title || sectionName + " all",
            link:
              type === "md"
                ? `./content/${sectionName}/${entryName}.${type}`
                : `./${sectionName}/${entryName}.${type}`,
            entryLink: entryLink,
            section: sectionName,
            content:
              type === "md"
                ? cleanContent(content)
                : marked.parse(cleanContent(content)),
            type: metadata.title ? "content" : "collection",
          });
        }
      }

      const sectionContent = await buildLinksList(
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

  await generateStatisticsFile(lm, type, outputFolder);

  allContentWithSections.push({
    title: "statistics",
    link: "./content/statistics." + type,
    entryLink: "./statistics." + type,
    section: "Statistics",
    type: "collection",
  });

  allContentWithSections.push({
    title: "All",
    link: "./content/all." + type,
    entryLink: "./all." + type,
    section: "All content",
    type: "collection",
  });

  let allOutput = buildHeadline("Holy Theory project", 1, type) + "\n";
  const headerRegex = /^#\s+(.+)/gm;

  let prevSection = "";
  allContentWithSections.forEach((e: Entry) => {
    if (e.type === "content") {
      if (prevSection !== e.section) {
        prevSection = e.section;
        allOutput += buildHeadline(e.section, 2, type) + "\n";
      }
      allOutput += buildHeadline(e.title, 3, type) + "\n";
      e.content ? (allOutput += e.content.replace(headerRegex, "")) : "";
    }
  });

  if (type === "html") {
    allOutput = generateTableOfContents(allOutput, "html") + allOutput;
    allOutput = htmlPageWrapper(allOutput);
    const preparedOutput = allOutput.replace(
      /https:\/\/raw\.githubusercontent\.com\/AndersDeath\/holy-theory\/main\/images/g,
      "../images"
    );
    await fs.writeFile(
      path.join(outputFolder, "prepared_all." + type),
      preparedOutput
    );
  }

  if (type === "md") {
    allOutput = generateTableOfContents(allOutput) + allOutput;

    let preparedOutput = allOutput.replace(
      /https:\/\/raw\.githubusercontent\.com\/AndersDeath\/holy-theory\/main\/images/g,
      "../images"
    );
    preparedOutput = preparedOutput.replace(/\$/g, "\\$");
    preparedOutput = preparedOutput.replace(/frac{/g, '"Temporary removed"');

    // \(\frac{n \times (n + 1) \times (2n + 1)}{6}\).
    // \(\frac{n \times (n + 1)}{2}\).

    await fs.writeFile(
      path.join(outputFolder, "prepared_all." + type),
      preparedOutput
    );
    //
  }

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
