import * as fs from "fs-extra";
import * as path from "path";

interface Entry {
  title: string;
  link: string;
  section?: string;
}

async function generateTableOfContents(entries: Entry[]): Promise<string> {
  const listItems = entries.map((entry) => `- [${entry.title}](${entry.link})`);
  return listItems.join("\n");
}

function generateSectionReadmes(
  contentBySection: Record<string, string[]>
): string {
  const sections = Object.keys(contentBySection);
  return sections
    .map((section) => {
      const sectionContent = contentBySection[section].join("\n");
      return `## ${section}\n\n${sectionContent}`;
    })
    .join("\n\n");
}


function accumulateContent(){
  
}

const generateGlobalReadmeMd = async (allContentWithSections, outputFolder) => {
  const globalReadmeContent = allContentWithSections.reduce((acc, entry) => {
    if (entry.section) {
      if (!acc[entry.section]) {
        acc[entry.section] = [];
      }
      acc[entry.section].push(`- [${entry.title}](${entry.link})`);
    }
    return acc;
  }, {} as Record<string, string[]>);

  const globalReadmeOutputPath = path.join(outputFolder, "../readme.md");
  const sectionReadmes =
    "# Holy Theory \n\n" + generateSectionReadmes(globalReadmeContent);

  await fs.writeFile(globalReadmeOutputPath, sectionReadmes);
};

async function generateStaticMD(
  rootFolder: string,
  outputFolder: string,
  parseMd: any
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

        if (path.extname(file) === ".md") {
          const markdownContent = await fs.readFile(filePath, "utf-8");
          const { metadata, content }: any = parseMd(markdownContent);
          const entryName = file.replace(/\.[^.]+$/, "");
          const entryLink = `./${entryName}.md`;

          entryNames.push({ title: metadata.title, link: entryLink });

          const entryOutputPath = path.join(
            sectionOutputFolder,
            `${entryName}.md`
          );

          await fs.writeFile(entryOutputPath, markdownContent);

          allContentWithSections.push({
            title: metadata.title || sectionName + " all",
            link: `./content/${sectionName}/${entryName}.md`,
            section: sectionName,
          });
        }
      }

      const sectionContent = await generateTableOfContents(entryNames);
      const sectionIndexOutputPath = path.join(sectionOutputFolder, "index.md");

      await fs.writeFile(sectionIndexOutputPath, sectionContent);
    }
  }

  await generateGlobalReadmeMd(allContentWithSections, outputFolder);
}

export const mdBuilder = () => {
  import("parse-md").then((module) => {
    const parseMD = module.default;
    const rootContentFolder = path.join(__dirname, "../content");
    const outputFolderMd = path.join(__dirname, "../content");

    generateStaticMD(rootContentFolder, outputFolderMd, parseMD)
      .then(() => console.log("Markdown static website generated successfully"))
      .catch((err) =>
        console.error("Error generating Markdown static website:", err)
      );
  });
};
