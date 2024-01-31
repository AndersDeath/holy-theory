import { generateTableOfContents } from "../builder/generateTableOfContents";
import { buildHeadline, htmlPageWrapper } from "../ui";

export class Project {
  private output: string = "";
  private type: string = "";
  constructor(type: string, headline: string = "") {
    this.type = type;
    if (headline.trim().length) {
      this.output = buildHeadline(headline, 1, type) + "\n";
    }
  }

  append(content: string) {
    this.output += content;
  }

  generateTableOfContents() {
    this.output = generateTableOfContents(this.output, this.type) + this.output;
  }

  applyHtmlWrapper() {
    this.output = htmlPageWrapper(this.output);
  }

  export() {
    return this.output;
  }
}
