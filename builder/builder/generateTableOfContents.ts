import { marked } from "../libs/marked";

export function generateTableOfContents(markdownContent: string, type = "md"): string {
    const renderer = new marked.Renderer();
    let tableOfContents = "";
  
    renderer.heading = function (text, level, raw) {
      const anchor = text.toLowerCase().replace(/[^\w]+/g, "-");
      let indentation = "  ".repeat(level - 1);
      if (level > 1) {
        indentation += "- ";
      }
      tableOfContents += `${indentation}[${text}](#${anchor})\n`;
      return `<h${level} id="${anchor}">${text}</h${level}>\n`;
    };
  
    marked(markdownContent, { renderer });
    if (type === "html") {
      return `<div class="table-of-contents">\n${tableOfContents}</div>`;
    } else {
      return tableOfContents;
    }
  }
  