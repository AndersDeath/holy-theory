import fs from "fs";
import path from "path";

import { LanguageMap } from "./language-map"; // Update the import path accordingly
import { Templates } from "./templates"; // Update the import path accordingly
import { Entity } from "./entity";
import { createBuilder } from "./factories";
import { basePath, paths } from "./constants";
import { cleanContent } from "./utils";

const builder = createBuilder();

const templates = new Templates(paths, "index");

const nav = builder.buildNavigation();

export function Builder() {
  import("parse-md")
    .then((module) => {
      const parseMD = module.default;
      let testData: any[] = [];
      let tableOfContents: any[] = [];
      let entities: Entity[] = [];

      let lm = new LanguageMap();

      builder.getData().forEach((group) => {
        for (let index = 0; index < group.length; index++) {
          const item = group[index];
          const pathObj = path.parse(item);
          const fileContents = fs.readFileSync(item, "utf8");
          const { metadata, content }: any = parseMD(fileContents);

          let cleanedContent = cleanContent(content);

          if (metadata.languages.length > 0) {
            lm.setFromArr(metadata.languages);
          }

          let dataItem: any = builder.buildDataItem({
            metadata,
            cleanedContent,
            pathObj,
          });

          entities.push(
            new Entity(
              metadata.title,
              { ...metadata, ...dataItem.meta },
              cleanedContent,
              pathObj.dir
            )
          );

          if (
            !tableOfContents.some((value) => {
              return value.category === pathObj.dir;
            })
          ) {
            let obj: any = {
              category: pathObj.dir,
              title: pathObj.dir.charAt(0).toUpperCase() + pathObj.dir.slice(1),
              data: [],
            };
            obj.data.push(dataItem);
            tableOfContents.push(obj);
          } else {
            tableOfContents.map((value) => {
              if (value.category === pathObj.dir) {
                value.data.push(dataItem);
              }
              return value;
            });
          }

          testData.push(dataItem);
        }
      });

      let articles: any[] = [];

      testData.forEach((item) => {
        builder.buildFoldersForCategories(basePath, item);
        builder.buildArticleHtml(nav, item);
        articles.push(templates.getData()["article"].build(item));
        builder.buildArticleMdHtml(item);
      });

      builder.buildIndexHtml(nav);

      builder.buildAllHtml(nav, articles);

      builder.buildLanguagesHtml(nav, lm);

      builder.buildTableOfContents(nav, tableOfContents);
    })
    .catch((error) => {
      console.error("Error importing 'parse-md':", error);
    });
}
