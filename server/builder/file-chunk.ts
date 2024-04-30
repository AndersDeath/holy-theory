import { B3File, Config, RawContent } from "./models/interfaces";
import { marked } from "./libs/marked";
import * as path from "path";

export class FileChunk {
  rawContent: RawContent[] = [];
  config: Config = {
    sourceRootPath: "",
    htmlOutputPath: "",
  };
  constructor(config: Config, rawContent: RawContent[]) {
    this.rawContent = rawContent;
    this.config = config;
  }

  async run(): Promise<any[]> {
    const files: B3File[] = [];

    const contentAggregation: Map<string, string> = new Map();

    for (let i = 0; i < this.rawContent.length; i++) {
      const rawContent: RawContent = this.rawContent[i];

      files.push({
        path: path.join(
          this.config.htmlOutputPath,
          rawContent.category,
          rawContent.fileName + ".html"
        ),
        content: marked.parse(rawContent.content),
        category: rawContent.category,
        name: rawContent.metadata.name || "",
      });

      if (!contentAggregation.get(rawContent.category))
        contentAggregation.set(rawContent.category, "");
      if (!contentAggregation.get("all")) contentAggregation.set("all", "");

      contentAggregation.set(
        rawContent.category,
        contentAggregation.get(rawContent.category) +
          marked.parse(rawContent.content)
      );
      contentAggregation.set(
        "all",
        contentAggregation.get(rawContent.category) +
          marked.parse(rawContent.content)
      );
    }

    const contentAggregationFromMap = Object.fromEntries(contentAggregation);
    Object.keys(contentAggregationFromMap).forEach((key: string) => {
      files.push({
        path:
          key === "all"
            ? path.join(this.config.htmlOutputPath, "all.html")
            : path.join(this.config.htmlOutputPath, key, "all.html"),
        content: marked.parse(contentAggregationFromMap[key]),
        category: key,
        name: "all",
      });
    });

    return files;
  }
}
