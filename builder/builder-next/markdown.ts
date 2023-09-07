import * as fs from "fs-extra";
import * as path from "path";
import { marked } from "../app/marked";


function generateTableOfContents(
  entries: { title: string; link: string }[]
): string {
  const listItems = entries.map((entry) => `- [${entry.title}](${entry.link})`);
  return listItems.join("\n");
}

function generateSectionMarkdown(sectionName: string, entries: any[]): string {
  const tableOfContents = generateTableOfContents(entries);
  return `
## ${sectionName}

${tableOfContents}
  `;
}

async function generateStaticWebsite(
  rootFolder: string,
  outputFolder: string
): Promise<void> {
  const folders = await fs.readdir(rootFolder);
  const mainSections = [];

  for (const folder of folders) {
    const folderPath = path.join(rootFolder, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      const sectionName = folder.replace(/ /g, "-");
      const sectionOutputFolder = path.join(outputFolder, sectionName);
      await fs.mkdirp(sectionOutputFolder);

      const files = await fs.readdir(folderPath);
      const entryNames = [];

      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileExt = path.extname(file);

        if (fileExt === ".md") {
          const markdownContent = await fs.readFile(filePath, "utf-8");
          const entryName = file.replace(/\.[^.]+$/, ""); // Remove file extension
          entryNames.push({ title: entryName, link: `./${entryName}.md` });

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.md`
          );
          await fs.writeFile(entryOutputPath, markdownContent);
        }
      }

      const sectionMarkdown = generateSectionMarkdown(folder, entryNames);
      const sectionIndexMarkdownPath = path.join(
        sectionOutputFolder,
        "index.md"
      );
      await fs.writeFile(sectionIndexMarkdownPath, sectionMarkdown);

      mainSections.push({ name: folder, path: sectionName });
    }
  }

  const rootIndexMarkdownContent = mainSections
    .map((section) => `- [${section.name}](${section.path}/index.md)`)
    .join("\n");

  const rootIndexMarkdownPath = path.join(outputFolder, "index.md");
  await fs.writeFile(rootIndexMarkdownPath, rootIndexMarkdownContent);
}

generateStaticWebsite(
  path.join(__dirname, "content"),
  path.join(__dirname, "output")
)
  .then(() => console.log("Static website generated successfully"))
  .catch((err) => console.error("Error generating static website:", err));
