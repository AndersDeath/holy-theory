import { ContentType } from './../models/ContentEntity';
import { ContentEntity } from "../models/ContentEntity";

export const staticContentEntityFactory = (
  entityName: string,
  type: string
): ContentEntity => {
  if (entityName === "statistics") return buildStatisticsContentEntity(type);
  if (entityName === "all") return buildAllContentEntity(type);
  return buildDefaultContentEntity();
};

const buildStatisticsContentEntity = (type: string) => {
  return new ContentEntity(
    "statistics",
    "./content/statistics." + type,
    "./statistics." + type,
    "Statistics",
    "",
    ContentType.COLLECTION
  );
};

const buildAllContentEntity = (type: string) => {
  return new ContentEntity(
    "All",
    "./content/all." + type,
    "./all." + type,
    "All content",
    "",
    ContentType.COLLECTION
  );
};

const buildDefaultContentEntity = () => {
  return new ContentEntity("", "", "", "", "", ContentType.EMPTY);
};
