import * as fs from "fs-extra";
import * as path from "path";
import { marked } from "../app/marked";

function convertMarkdownToHTML(markdownContent: string): string {
  return marked(markdownContent);
}

function generateTableOfContents(entries: string[]): string {
  const listItems = entries.map(
    (entry) =>
      `<li><a href="${entry}.html">${entry.replace(/ /g, "-")}</a></li>`
  );
  return `<ul>${listItems.join("")}</ul>`;
}

// Function to generate the HTML content for a section
function generateSectionHTML(sectionName: string, entries: string[]): string {
  const tableOfContents = generateTableOfContents(entries);
  return `
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
          const htmlContent = convertMarkdownToHTML(markdownContent);
          const entryName = file.replace(/\.[^.]+$/, ""); // Remove file extension
          entryNames.push(entryName);

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.html`
          );
          await fs.writeFile(entryOutputPath, htmlContent);
        }
      }

      const sectionHTML = generateSectionHTML(folder, entryNames);
      const sectionIndexHTMLPath = path.join(sectionOutputFolder, "index.html");
      await fs.writeFile(sectionIndexHTMLPath, sectionHTML);

      mainSections.push({ name: folder, path: sectionName });
    }
  }

  const rootIndexHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Your Static Website</title>
      </head>
      <body>
        <header>
          <h1>Your Static Website</h1>
          <nav>
            <ul>
              ${mainSections
                .map(
                  (section) =>
                    `<li><a href="${section.path}/index.html">${section.name}</a></li>`
                )
                .join("")}
            </ul>
          </nav>
        </header>
      </body>
    </html>
  `;

  const rootIndexHTMLPath = path.join(outputFolder, "index.html");
  await fs.writeFile(rootIndexHTMLPath, rootIndexHTML);
}

generateStaticWebsite(
  path.join(__dirname, "content"),
  path.join(__dirname, "output")
)
  .then(() => console.log("Static website generated successfully"))
  .catch((err) => console.error("Error generating static website:", err));
