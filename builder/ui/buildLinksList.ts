import { Entry } from "../interfaces";
import { buildLink } from "./buildLink";
import { buildListItem } from "./buildListItem";

export async function buildLinksList(
    entries: Entry[],
    type = "md"
  ): Promise<string> {
    let listItems = entries.map((entry) =>
      buildListItem(buildLink(entry.title, entry.entryLink, type), type)
    );
  
    if (type === "html") {
      return `<ul>${listItems.join("\n")}</ul>`;
    }
    return listItems.join("\n");
  }
  