import * as path from "path";
import { tableOfContentsHtml, tableOfContentsMd } from "./ui";
import { Logger } from "./logger/logger";

import {
  B3File,
  Config,
  OutputFileTypes,
  RawContent,
} from "./models/interfaces";

export class FileGroup {
  rawContent: RawContent[] = [];
  aggregatedContent: Map<string, string> = new Map();
  outputPath: string = "";
  config: Config = {
    sourceRootPath: "",
    htmlOutputPath: "",
    outputType: OutputFileTypes.HTML,
    markdownOutputPath: "",
    targetCategory: "",
    tempFolderPath: "",
  };
  logger: Logger = new Logger();

  constructor(config: Config, rawContent: RawContent[]) {
    this.rawContent = rawContent;
    this.config = config;
    if (!this.config.outputType) {
      this.logger.throwError("Critical Error: Output type should be defined");
    }
    this.outputPath =
      this.config.outputType === OutputFileTypes.MD
        ? this.config.markdownOutputPath
        : this.config.htmlOutputPath;
  }

  private initAggregatedContentKey(category: string) {
    if (!this.aggregatedContent.has(category)) {
      this.aggregatedContent.set(category, "");
    }
  }

  private appendAggregatedContentValue(category: string, value: string) {
    this.aggregatedContent.set(
      category,
      this.aggregatedContent.get(category) + value
    );
  }

  private generateTableOfContents(text: string): string {
    if (this.config.outputType === OutputFileTypes.MD) {
      return tableOfContentsMd(text);
    }
    if (this.config.outputType === OutputFileTypes.HTML) {
      return tableOfContentsHtml(text);
    }
    return "";
  }

  private createSimpleFile(rawContent: RawContent): B3File {
    const fileName = rawContent.fileName + "." + this.config.outputType;
    const filePath = path.join(this.outputPath, rawContent.category, fileName);
    return {
      path: filePath,
      content: rawContent.content,
      category: rawContent.category,
      name: rawContent.metadata.title || "",
      sort: rawContent.metadata.sort || 0,
      ignore: rawContent.metadata.ignore || false,
    };
  }

  private createAggregatedFileGroup(groupName: string): B3File[] {
    const files: B3File[] = [];
    const contentAggregationFromMap = Object.fromEntries(
      this.aggregatedContent
    );
    Object.keys(contentAggregationFromMap).forEach((key: string) => {
      const filePath =
        key === groupName
          ? path.join(this.outputPath, groupName + "." + this.config.outputType)
          : path.join(
              this.outputPath,
              key,
              groupName + "." + this.config.outputType
            );
      files.push({
        path: filePath,
        content: contentAggregationFromMap[key],
        category: key,
        name: groupName,
        sort: 0,
        ignore: false,
      });
    });
    return files;
  }

  async run(): Promise<B3File[]> {
    const files: B3File[] = [];
    const allKey = "all";
    if (this.config.targetCategory) {
      this.rawContent = this.rawContent.filter(
        (item: RawContent) => item.category === this.config.targetCategory
      );
    }
    for (const rawContent of this.rawContent) {
      files.push(this.createSimpleFile(rawContent));

      this.initAggregatedContentKey(rawContent.category);
      this.initAggregatedContentKey(allKey);

      this.appendAggregatedContentValue(
        rawContent.category,
        rawContent.content
      );
      this.appendAggregatedContentValue(allKey, rawContent.content);
    }

    this.aggregatedContent.set(
      allKey,
      this.generateTableOfContents(this.aggregatedContent.get(allKey) || "") +
        this.aggregatedContent.get(allKey)
    );
    const aggregatedFiles = this.createAggregatedFileGroup(allKey);
    files.push(...aggregatedFiles);
    return files;
  }

  async prepareBookTemplateContent(): Promise<B3File[]> {
    const files: B3File[] = [];
    const preparedBookTemplateKey = "prepared-book-template";
    this.outputPath = this.config.tempFolderPath;

    if (this.config.targetCategory) {
      this.rawContent = this.rawContent.filter(
        (item: RawContent) => item.category === this.config.targetCategory
      );
    }
    for (const rawContent of this.rawContent) {
      this.initAggregatedContentKey(preparedBookTemplateKey);

      this.appendAggregatedContentValue(
        preparedBookTemplateKey,
        rawContent.content
      );
    }

    this.aggregatedContent.set(
      preparedBookTemplateKey,
      this.generateTableOfContents(
        this.aggregatedContent.get(preparedBookTemplateKey) || ""
      ) + this.aggregatedContent.get(preparedBookTemplateKey)
    );
    const aggregatedFiles = this.createAggregatedFileGroup(
      preparedBookTemplateKey
    );
    files.push(...aggregatedFiles);
    return files;
  }
}
