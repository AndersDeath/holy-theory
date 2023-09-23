export function buildLink(title: string, href: string, type: string) {
  if (type === "md") return `[${title}](${href})`;
  if (type === "html") return `<a href="${href}">${title}</a>`;
  return "";
}

export function buildList(content, type: string) {
  if (type === "md") return `- ${content}`;
  if (type === "html") return `<li>${content}</li>`;
  return "";
}

export function buildHeader(content, level: number, type: string) {
  if (type === "md") return Array(level).fill("#") + " " + content;
  if (type === "html") return `<h${level}>${content}</h${level}>`;
  return "";
}
