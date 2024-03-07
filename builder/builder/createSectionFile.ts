import { cleanContent } from "../libs/utils";
import { htmlPageWrapper } from "../ui";
import { marked } from "../libs/marked";
import * as fs from "fs-extra";

export const createSectionFile = (path: string, content, type = "md") => {
  if (type === "md") {
    fs.writeFileSync(path, content);
  }

  if (type === "html") {
    fs.writeFileSync(
      path,
      htmlPageWrapper(marked.parse(cleanContent(content)))
    );
  }
};
