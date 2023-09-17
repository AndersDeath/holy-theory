import * as fs from "fs-extra";
import * as path from "path";

interface Entry {
  title: string;
  link: string;
  section?: string;
}

async function generateTableOfContents(
  entries: Entry[],
  isMarkdown: boolean
): Promise<string> {
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
          const entryLink = `./${entryName}.md`;

          entryNames.push({ title: entryName, link: entryLink });

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.md`
          );

          await fs.writeFile(entryOutputPath, markdownContent);

          allContentWithSections.push({
            title: entryName,
            link: `./${sectionName}/${entryName}.md`,
            section: sectionName,
          });
        }
      }

      const sectionContent = await generateTableOfContents(
        entryNames,
        isMarkdown
      );
      const sectionIndexOutputPath = path.join(sectionOutputFolder, "index.md");

      await fs.writeFile(sectionIndexOutputPath, sectionContent);
    }
  }

  if (isMarkdown) {
    const globalReadmeContent = allContentWithSections.reduce((acc, entry) => {
      if (!acc[entry.section]) {
        acc[entry.section] = [];
      }
      acc[entry.section].push(`- [${entry.title}](${entry.link})`);
      return acc;
    }, {} as Record<string, string[]>);

    const globalReadmeOutputPath = path.join(outputFolder, "readme.md");
    const sectionReadmes = generateSectionReadmes(globalReadmeContent);

    await fs.writeFile(globalReadmeOutputPath, sectionReadmes);
  }
}

function generateSectionReadmes(
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
const outputFolderMd = path.join(__dirname, "md");

generateStaticWebsite(rootContentFolder, outputFolderMd, true)
  .then(() => console.log("Markdown static website generated successfully"))
  .catch((err) =>
    console.error("Error generating Markdown static website:", err)
  );
