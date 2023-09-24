import * as fs from "fs-extra";
import * as path from "path";
import { buildHeader, buildLink, buildList, htmlPageWrapper } from "./ui";

interface Entry {
  title: string;
  link: string;
  section?: string;
  entryLink: string;
}

async function generateTableOfContents(entries: Entry[]): Promise<string> {
  const listItems = entries.map(
    (entry) => `- [${entry.title}](${entry.entryLink})`
  );
  return listItems.join("\n");
}

function generateSectionReadmes(
  contentBySection: Record<string, string[]>,
  type = "md"
): string {
  return Object.keys(contentBySection)
    .map((section) => {
      let sectionContent = contentBySection[section].join("\n");

      if(type === 'html') {
        sectionContent = `<ul>${sectionContent}</ul>`
      }
      return `${buildHeader(section, 2, type)}\n\n${sectionContent}`;
    })
    .join("\n\n");
}

const generateGlobalIndex = async (
  allContentWithSections,
  outputPath,
  type = "md"
) => {
  const globalReadmeContent = allContentWithSections.reduce((acc, entry) => {
    if (entry.section) {
      if (!acc[entry.section]) {
        acc[entry.section] = [];
      }
      acc[entry.section].push(
        buildList(buildLink(entry.title, entry.link, type), type)
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

async function generateStaticMD(
  rootFolder: string,
  outputFolder: string,
  parseMd: any,
  type = "md"
): Promise<void> {
  const folders = await fs.readdir(rootFolder);

  const allContentWithSections: Entry[] = [];

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
          const entryName = file.replace(/\.[^.]+$/, "");
          const entryLink = `./${entryName}.md`;

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.md`
          );

          await fs.writeFile(entryOutputPath, markdownContent);

          allContentWithSections.push({
            title: metadata.title || sectionName + " all",
            link: `./content/${sectionName}/${entryName}.md`,
            entryLink: entryLink,
            section: sectionName,
          });
        }
      }

      const sectionContent = await generateTableOfContents(
        allContentWithSections.filter((e: Entry) => e.section === sectionName)
      );

      const sectionIndexOutputPath = path.join(sectionOutputFolder, "index.md");

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

    generateStaticMD(rootContentFolder, outputFolder, parseMD, type)
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
