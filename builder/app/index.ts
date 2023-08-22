import fs from "fs";
import path from "path";
import parseMD from "parse-md";
import { marked } from "./marked"; // You need to import the appropriate module for marked
import { LanguageMap } from "./language-map"; // Update the import path accordingly
import { getConfig } from "./utils"; // Update the import path accordingly
import { Templates } from "./templates"; // Update the import path accordingly

const baseUrl = "/builder/test/";
const basePath = "." + baseUrl;

const paths = getConfig().templates;

const templates = new Templates(paths, "index");

const nav = templates.getData()["nav"].build({
  values: [
    {
      href: "/holy-theory" + baseUrl,
      title: "Main page",
    },
    {
      href: "/holy-theory" + baseUrl + "/languages.html",
      title: "Statistics",
    },
  ],
});

class Entity {
  id: string;
  title: string;
  meta: any;
  body: string;
  category: string;

  constructor(title: string, meta: any, body: string, category: string) {
    this.id = this.makeId(title);
    this.title = title;
    this.meta = meta;
    this.body = body;
    this.category = category;
  }

  makeId(name: string): string {
    return "";
  }
}

const folders = getConfig().folders;

function getFiles(dir: string): string[] {
  let results: string[] = [];
  fs.readdirSync(dir).forEach((file) => {
    file = dir + "/" + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      if (path.extname(file) === ".md") {
        results.push(file);
      }
    }
  });
  return results;
}

export function Builder() {
  let testData: any[] = [];
  let data: string[][] = [];
  let tableOfContents: any[] = [];
  let entities: Entity[] = [];

  let lm = new LanguageMap();

  folders.forEach((e: any) => {
    data.push(getFiles(path.join("./", e)));
  });

  data.forEach((group) => {
    for (let index = 0; index < group.length; index++) {
      const item = group[index];
      const pathObj = path.parse(item);
      const fileContents = fs.readFileSync(item, "utf8");
      const { metadata, content }: any = parseMD(fileContents);

      let cleanedContent = content.replace("* [Go back](../readme.md)", "");
      if (metadata.languages.length > 0) {
        lm.setFromArr(metadata.languages);
      }

      let d: any = {
        title: metadata.title,
        body: marked.parse(cleanedContent),
        bodyMD: cleanedContent,

        meta: {
          category: pathObj.dir,
          url:
            "/holy-theory" +
            baseUrl +
            pathObj.dir +
            "/" +
            pathObj.name.replace(" ", "-").toLowerCase() +
            ".html",
          fileName: {
            original: pathObj.name,
            dashed: pathObj.name.replace(" ", "-").toLowerCase(),
          },
        },
      };

      entities.push(
        new Entity(
          metadata.title,
          { ...metadata, ...d.meta },
          cleanedContent,
          pathObj.dir
        )
      );

      if (
        !tableOfContents.some((value, index) => {
          return value.category === pathObj.dir;
        })
      ) {
        let obj: any = {
          category: pathObj.dir,
          title: pathObj.dir.charAt(0).toUpperCase() + pathObj.dir.slice(1),
          data: [],
        };
        obj.data.push(d);
        tableOfContents.push(obj);
      } else {
        tableOfContents.map((value) => {
          if (value.category === pathObj.dir) {
            value.data.push(d);
          }
          return value;
        });
      }

      testData.push(d);
    }
  });

  let articles: any[] = [];
  testData.forEach((item) => {
    if (!fs.existsSync(basePath + item.meta.category)) {
      fs.mkdirSync(basePath + item.meta.category, { recursive: true });
    }

    const html = templates.getData()["article"].build({
      navigation: nav,
      title: item.title,
      body: item.body,
    });

    fs.writeFileSync(
      basePath + item.meta.category + "/" + item.meta.fileName.dashed + ".html",
      html
    );

    articles.push(templates.getData()["article"].build(item));
    if (!fs.existsSync(basePath + "/md")) {
      fs.mkdirSync(basePath + "/md", { recursive: true });
    }
    fs.writeFileSync(
      `./builder/test/md/${item.title.replace("/", "-")}.md`,
      templates.getData()["articleMD"].build(item)
    );
  });

  let o = templates.getData()["layout"].build({
    header: "Holy Theory",
    values: articles,
    navigation: nav,
  });

  fs.writeFileSync(
    basePath + "/index.html",
    templates.getData()["main"].build({ navigation: nav })
  );
  fs.writeFileSync(basePath + "/all.html", o);
  fs.writeFileSync(
    basePath + "/languages.html",
    templates.getData()["languages"].build({
      navigation: nav,
      values: Object.fromEntries(lm.get()),
    })
  );

  fs.writeFileSync(
    basePath + "/table-of-contents.html",
    templates.getData()["table-of-contents"].build({
      navigation: nav,
      values: tableOfContents,
    })
  );
}
