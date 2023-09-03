import fs from "fs";
import path from "path";

import { LanguageMap } from "./language-map"; // Update the import path accordingly
import { Templates } from "./templates"; // Update the import path accordingly
import { Entity } from "./entity";
import {
  buildAllHtml,
  buildArticleHtml,
  buildArticleMdHtml,
  buildDataItem,
  buildFoldersForCategories,
  buildIndexHtml,
  buildLanguagesHtml,
  buildNavigation,
  buildTableOfContents,
  getData,
} from "./factories";
import { basePath, baseUrl, paths } from "./constants";

const templates = new Templates(paths, "index");

const nav = buildNavigation(templates);

export function Builder() {
  import("parse-md")
    .then((module) => {
      const parseMD = module.default;
      let testData: any[] = [];
      let tableOfContents: any[] = [];
      let entities: Entity[] = [];

      let lm = new LanguageMap();

      getData().forEach((group) => {
        for (let index = 0; index < group.length; index++) {
          const item = group[index];
          const pathObj = path.parse(item);
          const fileContents = fs.readFileSync(item, "utf8");
          const { metadata, content }: any = parseMD(fileContents);

          let cleanedContent = content.replace("* [Go back](../readme.md)", "");
          if (metadata.languages.length > 0) {
            lm.setFromArr(metadata.languages);
          }

          let dataItem: any = buildDataItem({
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
        buildFoldersForCategories(basePath, item);
        buildArticleHtml(nav, item);
        articles.push(templates.getData()["article"].build(item));
        buildArticleMdHtml(item);
      });

      buildIndexHtml(nav);

      buildAllHtml(nav, articles);

      buildLanguagesHtml(nav, lm);

      buildTableOfContents(nav, tableOfContents);
    })
    .catch((error) => {
      console.error("Error importing 'parse-md':", error);
    });
}
