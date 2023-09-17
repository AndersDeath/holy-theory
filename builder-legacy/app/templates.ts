import fs from "fs";
import pug from "pug";
import { compile } from "@eit6609/markdown-templates";

interface PathElement {
  title: string;
  path: string;
  type: string;
  noIndex?: boolean;
}

class Templates {
  private paths: PathElement[];
  private data: Record<string, any>;
  private indexName?: string;
  private indexBuilder?: pug.compileTemplate;

  constructor(paths: PathElement[], indexName?: string) {
    this.paths = paths;
    this.data = {};
    if (indexName) {
      this.indexName = indexName;
      this.getIndexBuild();
    }

    this.load();
  }

  private load(): void {
    this.paths.forEach((element) => {
      this.data[element.title] = this.build(element);
    });
  }

  private getIndexBuild(): void {
    const index = this.paths.find((el) => el.title === this.indexName);
    if (index) {
      const file = fs.readFileSync(index.path, "utf-8");
      this.indexBuilder = pug.compile(file);
    }
  }

  private build(element: PathElement): any {
    const file = fs.readFileSync(element.path, "utf-8");
    if (element.type === "pug") {
      if (
        this.indexName &&
        element.title !== this.indexName &&
        !element.noIndex
      ) {
        return {
          file: file,
          build: (params: any) => {
            return this.indexBuilder
              ? this.indexBuilder({
                  content: pug.compile(file)(params),
                })
              : "";
          },
        };
      } else {
        return {
          file: file,
          build: pug.compile(file),
        };
      }
    }
    if (element.type === "md") {
      return {
        file: file,
        build: compile(file),
      };
    }
  }

  getData(): Record<string, any> {
    return this.data;
  }

  getTemplate(): void {
    // Define your getTemplate functionality if needed
  }
}

export { Templates };
