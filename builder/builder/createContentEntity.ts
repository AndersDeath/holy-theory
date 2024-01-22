import { cleanContent } from "../libs/utils";
import { ContentEntity } from "../models/ContentEntity";
import { marked } from "../libs/marked";

export const createContentEntity = (
  metadata,
  sectionName,
  type,
  entryName,
  entryLink,
  content
): ContentEntity => {
  return new ContentEntity(
    metadata.title || sectionName + " all",
    type === "md"
      ? `./content/${sectionName}/${entryName}.${type}`
      : `./${sectionName}/${entryName}.${type}`,
    entryLink,
    sectionName,

    type === "md" ? cleanContent(content) : marked.parse(cleanContent(content)),
    metadata.title ? "content" : "collection",
    metadata.sort || null,
    metadata.ignore || false
  );
};
