import { ContentEntity } from "../models/ContentEntity";
import { buildLink } from "./buildLink";
import { buildListItem } from "./buildListItem";

export const buildLinksList = (entries: ContentEntity[], type = "md") => {
  let listItems = entries.map((entry) =>
    buildListItem(buildLink(entry.title, entry.entryLink, type), type)
  );

  if (type === "html") {
    return `<ul>${listItems.join("\n")}</ul>`;
  }
  return listItems.join("\n");
};
