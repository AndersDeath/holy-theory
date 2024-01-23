export const buildListItem = (content, type: string) => {
  if (type === "md") return `- ${content}`;
  if (type === "html") return `<li>${content}</li>`;
  return "";
};
