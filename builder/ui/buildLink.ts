export const buildLink = (title: string, href: string, type: string) => {
  if (type === "md") return `[${title}](${href})`;
  if (type === "html") return `<a href="${href}">${title}</a>`;
  return "";
};
