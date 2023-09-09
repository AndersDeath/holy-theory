import * as fs from "fs-extra";
import * as path from "path";
import { marked } from "../app/marked";

interface Entry {
  title: string;
  link: string;
}

// Function to generate the table of contents
function generateTableOfContents(
  entries: Entry[],
  isMarkdown: boolean
): string {
  const listItems = entries.map((entry) =>
    isMarkdown
      ? `- [${entry.title}](${entry.link})`
      : `<li><a href="${entry.link}">${entry.title}</a></li>`
  );
  return isMarkdown ? listItems.join("\n") : `<ul>${listItems.join("")}</ul>`;
}

// Function to generate either HTML or Markdown content for a section
function generateSectionContent(
  sectionName: string,
  entries: Entry[],
  isMarkdown: boolean
): string {
  const tableOfContents = generateTableOfContents(entries, isMarkdown);
  return isMarkdown
    ? `## ${sectionName}\n\n${tableOfContents}`
    : `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${sectionName}</title>
      </head>
      <body>
        <header>
          <h1>${sectionName}</h1>
          <nav>${tableOfContents}</nav>
        </header>
      </body>
    </html>
  `;
}

async function generateStaticWebsite(
  rootFolder: string,
  outputFolder: string,
  isMarkdown: boolean
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
      const entryNames: Entry[] = [];

      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileExt = path.extname(file);

        if (fileExt === ".md" && isMarkdown) {
          const markdownContent = await fs.readFile(filePath, "utf-8");
          const entryName = file.replace(/\.[^.]+$/, ""); // Remove file extension
          entryNames.push({ title: entryName, link: `./${entryName}.md` });

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.md`
          );
          await fs.writeFile(entryOutputPath, markdownContent);
        } else if (fileExt === ".md" && !isMarkdown) {
          // Convert markdown to HTML
          const markdownContent = await fs.readFile(filePath, "utf-8");
          const htmlContent = marked(markdownContent);
          const entryName = file.replace(/\.[^.]+$/, ""); // Remove file extension
          entryNames.push({ title: entryName, link: `./${entryName}.html` });

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.html`
          );
          await fs.writeFile(entryOutputPath, htmlContent);
        }
      }

      const sectionContent = generateSectionContent(
        folder,
        entryNames,
        isMarkdown
      );
      const sectionIndexOutputPath = path.join(
        sectionOutputFolder,
        isMarkdown ? "index.md" : "index.html"
      );
      await fs.writeFile(sectionIndexOutputPath, sectionContent);

      mainSections.push({ name: folder, path: sectionName });
    }
  }

  const rootIndexContent = mainSections
    .map((section) =>
      isMarkdown
        ? `- [${section.name}](${section.path}/index.md)`
        : `<li><a href="${section.path}/index.html">${section.name}</a></li>`
    )
    .join(isMarkdown ? "\n" : "");

  const rootIndexOutputPath = path.join(
    outputFolder,
    isMarkdown ? "index.md" : "index.html"
  );
  await fs.writeFile(rootIndexOutputPath, rootIndexContent);
}

// Generate both Markdown and HTML versions of the static website
const rootContentFolder = path.join(__dirname, "content");
const outputFolderHtml = path.join(__dirname, "html");
const outputFolderMd = path.join(__dirname, "md");

generateStaticWebsite(rootContentFolder, outputFolderHtml, true)
  .then(() => console.log("Markdown static website generated successfully"))
  .catch((err) => console.error("Error generating Markdown static website:", err));

generateStaticWebsite(rootContentFolder, outputFolderMd, false)
  .then(() => console.log("HTML static website generated successfully"))
  .catch((err) => console.error("Error generating HTML static website:", err));
