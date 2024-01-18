export function buildHeadline(content, level: number, type: string) {
  if (type === "md") return Array(level).fill("#").join("") + " " + content;
  if (type === "html") return `<h${level}>${content}</h${level}>`;
  return "";
}
