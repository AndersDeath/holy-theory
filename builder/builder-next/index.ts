import * as fs from "fs-extra";
import * as path from "path";
import { marked } from "../app/marked";

interface Entry {
  title: string;
  link: string;
  section?: any;
}

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

async function generateStaticWebsite(
  rootFolder: string,
  outputFolder: string,
  isMarkdown: boolean
): Promise<void> {
  const folders = await fs.readdir(rootFolder);

  // Initialize an array to collect all content item links and their related section headers
  const allContentWithSections: Entry[] = [];

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
          const entryName = file.replace(/\.[^.]+$/, "");
          entryNames.push({ title: entryName, link: `./${entryName}.md` });

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.md`
          );
          await fs.writeFile(entryOutputPath, markdownContent);

          // Add the content item link and related section header to the array
          allContentWithSections.push({
            title: entryName,
            link: `./${sectionName}/${entryName}.md`,
            section: sectionName,
          });
        } else if (fileExt === ".md" && !isMarkdown) {
          const markdownContent = await fs.readFile(filePath, "utf-8");
          const htmlContent = marked(markdownContent);
          const entryName = file.replace(/\.[^.]+$/, "");
          entryNames.push({ title: entryName, link: `./${entryName}.html` });

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.html`
          );
          await fs.writeFile(entryOutputPath, htmlContent);

          // Add the content item link and related section header to the array
          allContentWithSections.push({
            title: entryName,
            link: `./${sectionName}/${entryName}.html`,
            section: sectionName,
          });
        }
      }

      const sectionContent = generateTableOfContents(entryNames, isMarkdown);
      const sectionIndexOutputPath = path.join(
        sectionOutputFolder,
        isMarkdown ? "index.md" : "index.html"
      );
      await fs.writeFile(sectionIndexOutputPath, sectionContent);
    }
  }

  if (isMarkdown) {
    // Generate a global readme.md file with section headers and related content item links
    const globalReadmeContent = allContentWithSections.reduce((acc, entry) => {
      if (!acc[entry.section]) {
        acc[entry.section] = [];
      }
      acc[entry.section].push(`- [${entry.title}](${entry.link})`);
      return acc;
    }, {} as Record<string, string[]>);

    const globalReadmeOutputPath = path.join(outputFolder, "readme.md");
    await fs.writeFile(
      globalReadmeOutputPath,
      generateSectionReadme(globalReadmeContent)
    );
  }
}

function generateSectionReadme(
  contentBySection: Record<string, string[]>
): string {
  const sections = Object.keys(contentBySection);
  return sections
    .map((section) => {
      const sectionContent = contentBySection[section].join("\n");
      return `# ${section}\n\n${sectionContent}`;
    })
    .join("\n\n");
}

const rootContentFolder = path.join(__dirname, "content");
const outputFolderHtml = path.join(__dirname, "html");
const outputFolderMd = path.join(__dirname, "md");

generateStaticWebsite(rootContentFolder, outputFolderMd, true)
  .then(() => console.log("Markdown static website generated successfully"))
  .catch((err) =>
    console.error("Error generating Markdown static website:", err)
  );

generateStaticWebsite(rootContentFolder, outputFolderHtml, false)
  .then(() => console.log("HTML static website generated successfully"))
  .catch((err) => console.error("Error generating HTML static website:", err));
