import fs from "fs";
import { Templates } from "./templates";
import { getConfig, getFiles } from "./utils";
import { folders } from "./constants";
import path from "path";
import { marked } from "./marked"; 

const baseUrl = "/builder/test/";

const basePath = "." + baseUrl;
const paths = getConfig().templates;

const templates = new Templates(paths, "index");

export const buildTableOfContents = (nav, content) => {
  fs.writeFileSync(
    basePath + "/table-of-contents.html",
    templates.getData()["table-of-contents"].build({
      navigation: nav,
      values: content,
    })
  );
};

export const buildLanguagesHtml = (nav, lm) => {
  fs.writeFileSync(
    basePath + "/languages.html",
    templates.getData()["languages"].build({
      navigation: nav,
      values: Object.fromEntries(lm.get()),
    })
  );
};
export const buildAllHtml = (nav, articles) => {
  fs.writeFileSync(
    basePath + "/all.html",
    templates.getData()["layout"].build({
      header: "Holy Theory",
      values: articles,
      navigation: nav,
    })
  );
};

export const buildIndexHtml = (nav) => {
  fs.writeFileSync(
    basePath + "/index.html",
    templates.getData()["main"].build({ navigation: nav })
  );
};

export const buildArticleHtml = (nav, item) => {
  fs.writeFileSync(
    basePath + item.meta.category + "/" + item.meta.fileName.dashed + ".html",
    templates.getData()["article"].build({
      navigation: nav,
      title: item.title,
      body: item.body,
    })
  );
};

export const buildArticleMdHtml = (item) => {
  if (!fs.existsSync(basePath + "/md")) {
    fs.mkdirSync(basePath + "/md", { recursive: true });
  }
  fs.writeFileSync(
    `./builder/test/md/${item.title.replace("/", "-")}.md`,
    templates.getData()["articleMD"].build(item)
  );
};

export const buildFoldersForCategories = (basePath, item) => {
  if (!fs.existsSync(basePath + item.meta.category)) {
    fs.mkdirSync(basePath + item.meta.category, { recursive: true });
  }
};

export const buildNavigation = (templates) => {
  return templates.getData()["nav"].build({
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
};

export const getData = () => {
  let data: string[][] = [];
  folders.forEach((e: any) => {
    data.push(getFiles(path.join("./", e)));
  });
  return data;
};

export const buildDataItem = (input: any) => {
  return {
    title: input.metadata.title,
    body: marked.parse(input.cleanedContent),
    bodyMD: input.cleanedContent,

    meta: {
      category: input.pathObj.dir,
      url:
        "/holy-theory" +
        baseUrl +
        input.pathObj.dir +
        "/" +
        input.pathObj.name.replace(" ", "-").toLowerCase() +
        ".html",
      fileName: {
        original: input.pathObj.name,
        dashed: input.pathObj.name.replace(" ", "-").toLowerCase(),
      },
    },
  };
};
