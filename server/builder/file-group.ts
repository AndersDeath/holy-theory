import { B3File, Config, RawContent } from "./models/interfaces";
import * as path from "path";
import { tableOfContentsHtml } from "./ui/table-of-contents.html";

export class FileGroup {
  rawContent: RawContent[] = [];
  aggregatedContent: Map<string, string> = new Map();
  config: Config = {
    sourceRootPath: "",
    htmlOutputPath: "",
    outputType: "html",
    markdownOutputPath: "",
  };
  constructor(config: Config, rawContent: RawContent[]) {
    this.rawContent = rawContent;
    this.config = config;
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

  async run(): Promise<any[]> {
    const files: B3File[] = [];

    for (let i = 0; i < this.rawContent.length; i++) {
      const rawContent: RawContent = this.rawContent[i];

      files.push({
        path: path.join(
          this.config.htmlOutputPath,
          rawContent.category,
          rawContent.fileName + "." + this.config.outputType
        ),
        content: rawContent.content,
        category: rawContent.category,
        name: rawContent.metadata.name || "",
      });

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
      tableOfContentsHtml(this.aggregatedContent.get("all") || "") +
        this.aggregatedContent.get("all")
    );

    const contentAggregationFromMap = Object.fromEntries(
      this.aggregatedContent
    );
    Object.keys(contentAggregationFromMap).forEach((key: string) => {
      files.push({
        path:
          key === "all"
            ? path.join(
                this.config.htmlOutputPath,
                "all." + this.config.outputType
              )
            : path.join(
                this.config.htmlOutputPath,
                key,
                "all." + this.config.outputType
              ),
        content: contentAggregationFromMap[key],
        category: key,
        name: "all",
      });
    });

    return files;
  }
}
