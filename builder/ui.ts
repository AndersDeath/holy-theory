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
  if (type === "md") return Array(level).fill("#").join('') + " " + content;
  if (type === "html") return `<h${level}>${content}</h${level}>`;
  return "";
}

export function htmlPageWrapper(content: string, meta?: any) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${meta?.title || "Holy Theory"}</title>
  </head>
  <body>
      ${content}
  </body>
  </html>`;
}
