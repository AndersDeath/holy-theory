export const cleanContent = (content: any) => {
  content = content.replace("* [Go back](../readme.md)", "");
  return content;
};

export const removeIgnoreBlock = (content: string): string => {
  const regex: RegExp = /<!-- ignore start -->(.*?)<!-- ignore end -->/gs;
  content.replace(regex, "");
  return content;
};

export const removeMDHeader = (content: string): string => {
  const headerRegex = /^#\s+(.+)/gm;
  content.replace(headerRegex, "");
  return content;
};
