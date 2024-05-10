import { B3File, Config, RawContent } from "./models/interfaces";
import * as path from "path";
import { tableOfContentsHtml, tableOfContentsMd } from "./ui";

export class FileGroup {
  rawContent: RawContent[] = [];
  aggregatedContent: Map<string, string> = new Map();
  outputPath: string = "";
  config: Config = {
    sourceRootPath: "",
    htmlOutputPath: "",
    outputType: "html",
    markdownOutputPath: "",
  };
  constructor(config: Config, rawContent: RawContent[]) {
    this.rawContent = rawContent;
    this.config = config;
    if (this.config.outputType === "md") {
      this.outputPath = this.config.markdownOutputPath;
    }
    if (this.config.outputType === "html") {
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
    if (this.config.outputType === "md") return tableOfContentsMd(text);
    if (this.config.outputType === "html") return tableOfContentsHtml(text);
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
      name: rawContent.metadata.name || "",
    };
  }

  createAggregatedFile() {}

  async run(): Promise<any[]> {
    const files: B3File[] = [];

    for (let i = 0; i < this.rawContent.length; i++) {
      const rawContent: RawContent = this.rawContent[i];

      files.push(this.createSimpleFile(rawContent));

      this.initAggregatedContentKey(rawContent.category);
      this.initAggregatedContentKey("all");

      this.appendAggregatedContentValue(
        rawContent.category,
        rawContent.content
      );
      this.appendAggregatedContentValue("all", rawContent.content);
    }

    this.aggregatedContent.set(
      "all",
      this.generateTableOfContents(this.aggregatedContent.get("all") || "") +
        this.aggregatedContent.get("all")
    );

    const contentAggregationFromMap = Object.fromEntries(
      this.aggregatedContent
    );
    Object.keys(contentAggregationFromMap).forEach((key: string) => {
      files.push({
        path:
          key === "all"
            ? path.join(this.outputPath, "all." + this.config.outputType)
            : path.join(this.outputPath, key, "all." + this.config.outputType),
        content: contentAggregationFromMap[key],
        category: key,
        name: "all",
      });
    });

    return files;
  }
}
