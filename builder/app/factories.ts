import fs from "fs";
import { Templates } from "./templates";
import { getConfig } from "./utils";

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
  let o = templates.getData()["layout"].build({
    header: "Holy Theory",
    values: articles,
    navigation: nav,
  });

  fs.writeFileSync(basePath + "/all.html", o);
};

export const buildIndexHtml = (nav) => {
  fs.writeFileSync(
    basePath + "/index.html",
    templates.getData()["main"].build({ navigation: nav })
  );
};

export const buildArticleHtml = (nav, item) => {
  const html = templates.getData()["article"].build({
    navigation: nav,
    title: item.title,
    body: item.body,
  });

  fs.writeFileSync(
    basePath + item.meta.category + "/" + item.meta.fileName.dashed + ".html",
    html
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
