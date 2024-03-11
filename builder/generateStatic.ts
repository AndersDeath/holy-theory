import * as fs from "fs-extra";
import * as path from "path";
import { buildHeadline, buildLinksList } from "./ui";
import { removeIgnoreBlock, removeMDHeader } from "./libs/utils";
import { LanguageMap } from "./libs/language-map";
import { ContentEntity } from "./models/ContentEntity";
import { generateGlobalIndex } from "./builder/generateGlobalIndex";
import { createSectionFile } from "./builder/createSectionFile";
import { generateStatisticsFile } from "./builder/generateStatisticsFile";
import { createContentEntity } from "./builder/createContentEntity";
import { staticContentEntityFactory } from "./builder/staticContentEntityFactory";
import { addPageBreak } from "./ui/addPageBreak";
import { Project } from "./projects/project";
import { GENERATE_STATIC_INIT, Logger } from "./logger/logger";

const logger = Logger.getInstance();

export const generateStatic = async (
  rootFolder: string,
  outputFolder: string,
  parseMd: any,
  type = "md"
): Promise<void> => {
  const folders = await fs.readdir(rootFolder);

  const allContentWithSections: ContentEntity[] = [];

  const lm = new LanguageMap();

  logger.info(GENERATE_STATIC_INIT);

  const parseFile = async (
    file: any,
    folderPath: any,
    sectionOutputFolder: any,
    sectionName: any
  ) => {
    const filePath = path.join(folderPath, file);

    if (path.extname(file) === ".md") {
      const markdownContent = await fs.readFile(filePath, "utf-8");
      const { metadata, content }: any = parseMd(markdownContent);

      if (metadata.languages?.length > 0) {
        lm.setFromArr(metadata.languages);
      }

      const entryName = file.replace(/\.[^.]+$/, "");

      createSectionFile(
        path.join(sectionOutputFolder, `${entryName}.${type}`),
        type === "md" ? markdownContent : content,
        type
      );

      allContentWithSections.push(
        createContentEntity(
          metadata,
          sectionName,
          type,
          entryName,
          `./${entryName}.` + type,
          content
        )
      );
    }
  };

  const parseFolder = async (folder: any, folderPath: any) => {
    const sectionName = folder.replace(/ /g, "-");
    const sectionOutputFolder = path.join(outputFolder, sectionName);
    await fs.mkdirp(sectionOutputFolder);

    const files = await fs.readdir(folderPath);

    for (const file of files) {
      await parseFile(file, folderPath, sectionOutputFolder, sectionName);
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
  };

  for (const folder of folders) {
    const folderPath = path.join(rootFolder, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      await parseFolder(folder, folderPath);
    }
  }

  await generateStatisticsFile(lm, type, outputFolder);

  allContentWithSections.push(staticContentEntityFactory("statistics", type));
  allContentWithSections.push(staticContentEntityFactory("all", type));

  const allProject = new Project(type, "Holy Theory project");
  const algorithmsProject = new Project(type);
  algorithmsProject.append(addPageBreak(type));

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
        allProject.append(buildHeadline(e.section, 2, type) + "\n");
      }
      allProject.append(buildHeadline(e.title, 3, type) + "\n");
      e.content ? allProject.append(removeMDHeader(e.content)) : "";
    }
  });

  algorithmsBucket.sort((a, b) => {
    return a.sort - b.sort;
  });

  algorithmsBucket.forEach((e) => {
    if (type === "md") {
      algorithmsProject.append(buildHeadline(e.title.trim(), 1, type) + "\n");
    }
    e.content ? algorithmsProject.append(removeMDHeader(e.content)) : "";

    e.content = removeIgnoreBlock(e.content);

    algorithmsProject.append(addPageBreak(type));
  });

  allProject.generateTableOfContents();
  if (type === "html") {
    allProject.applyHtmlWrapper();
  }
  const preparedAllProjectOutput = allProject
    .export()
    .replace(
      /https:\/\/raw\.githubusercontent\.com\/AndersDeath\/holy-theory\/main\/images/g,
      path.join("./", "images")
    );
  const preparedAlgorithmsProjectOutput = algorithmsProject
    .export()
    .replace(
      /https:\/\/raw\.githubusercontent\.com\/AndersDeath\/holy-theory\/main\/images/g,
      path.join("./", "images")
    );

  const outputBucket = [
    [path.join(outputFolder, "prepared_all." + type), preparedAllProjectOutput],
    [
      path.join(outputFolder, "prepared_all_algorithms." + type),
      preparedAlgorithmsProjectOutput,
    ],
    [path.join(outputFolder, "all." + type), allProject.export()],
  ];

  for (let index = 0; index < outputBucket.length; index++) {
    await fs.writeFile.apply(outputBucket[index]);
  }

  await generateGlobalIndex(
    allContentWithSections,
    path.join(outputFolder, type === "md" ? "../readme.md" : "index.html"),
    type
  );
};
