import {
  B3File,
  Config,
  OutputFileTypes,
  RawContent,
} from "./models/interfaces";
import * as path from "path";
import { tableOfContentsHtml, tableOfContentsMd } from "./ui";
import { Logger } from "./logger/logger";

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
    buildFolderPath: "",
  };
  logger: Logger = new Logger();
  constructor(config: Config, rawContent: RawContent[]) {
    this.rawContent = rawContent;
    this.config = config;
    if (!this.config.outputType) {
      this.logger.throwError("Critical Error: Output type should be defined");
    }
    if (this.config.outputType === OutputFileTypes.MD) {
      this.outputPath = this.config.markdownOutputPath;
    }
    if (this.config.outputType === OutputFileTypes.HTML) {
      this.outputPath = this.config.htmlOutputPath;
    }
  }

  initAggregatedContentKey(category: string) {
    if (!this.aggregatedContent.get(category))
      this.aggregatedContent.set(category, "");
  }

  appendAggregatedContentValue(category: string, value: string) {
    this.aggregatedContent.set(
      category,
      this.aggregatedContent.get(category) + value
    );
  }

  generateTableOfContents(text: string): string {
    if (this.config.outputType === OutputFileTypes.MD)
      return tableOfContentsMd(text);
    if (this.config.outputType === OutputFileTypes.HTML)
      return tableOfContentsHtml(text);
    return "";
  }

  createSimpleFile(rawContent: RawContent) {
    return {
      path: path.join(
        this.outputPath,
        rawContent.category,
        rawContent.fileName + "." + this.config.outputType
      ),
      content: rawContent.content,
      category: rawContent.category,
      name: rawContent.metadata.title || "",
      sort: rawContent.metadata.sort || 0,
      ignore: rawContent.metadata.ignore || false,
    };
  }

  createAggregatedFileGroup(groupName: string) {
    const files: B3File[] = [];
    const contentAggregationFromMap = Object.fromEntries(
      this.aggregatedContent
    );
    Object.keys(contentAggregationFromMap).forEach((key: string) => {
      files.push({
        path:
          key === groupName
            ? path.join(
                this.outputPath,
                groupName + "." + this.config.outputType
              )
            : path.join(
                this.outputPath,
                key,
                groupName + "." + this.config.outputType
              ),
        content: contentAggregationFromMap[key],
        category: key,
        name: groupName,
        sort: 0,
        ignore: false,
      });
    });
    return files;
  }

  async run(): Promise<any[]> {
    const files: B3File[] = [];
    const allKey = "all";
    if (this.config.targetCategory) {
      this.rawContent = this.rawContent.filter(
        (item: RawContent) => item.category === this.config.targetCategory
      );
    }
    for (let i = 0; i < this.rawContent.length; i++) {
      const rawContent: RawContent = this.rawContent[i];

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

  async prepareBookTemplateContent(): Promise<any[]> {
    const files: B3File[] = [];
    const preparedBookTemplateKey = "prepared-book-template";
    this.outputPath = this.config.buildFolderPath;

    if (this.config.targetCategory) {
      this.rawContent = this.rawContent.filter(
        (item: RawContent) => item.category === this.config.targetCategory
      );
    }
    for (let i = 0; i < this.rawContent.length; i++) {
      const rawContent: RawContent = this.rawContent[i];

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
