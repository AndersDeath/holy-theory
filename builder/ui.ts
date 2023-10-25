import { Entry } from "./interfaces";

export function buildLink(title: string, href: string, type: string) {
  if (type === "md") return `[${title}](${href})`;
  if (type === "html") return `<a href="${href}">${title}</a>`;
  return "";
}

export function buildListItems(content, type: string) {
  if (type === "md") return `- ${content}`;
  if (type === "html") return `<li>${content}</li>`;
  return "";
}

export function buildHeadline(content, level: number, type: string) {
  if (type === "md") return Array(level).fill("#").join("") + " " + content;
  if (type === "html") return `<h${level}>${content}</h${level}>`;
  return "";
}

export const wrapToHtmlTag = (tag: string, content = "") =>
  `<${tag}>${content}</${tag}>`;

export function htmlPageWrapper(content: string, meta?: any) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${meta?.title || "Holy Theory"}</title>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai.min.css" />
      <script type="application/javascript" src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
      <style>
      body {
        margin: 0;
            padding: 0;
        }

        img {
            max-width: 400px;
        }

        .content {
          width: 60%;
          margin: 0 auto;
        }
      </style>
  </head>
  <body>
      <div class="content">${content}</div>
  </body>
  </html>`;
}

export async function buildList(
  entries: Entry[],
  type = "md"
): Promise<string> {
  let listItems = entries.map((entry) =>
    buildListItems(buildLink(entry.title, entry.entryLink, type), type)
  );

  if (type === "html") {
    return `<ul>${listItems.join("\n")}</ul>`;
  }
  return listItems.join("\n");
}
