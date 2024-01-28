import { generateTableOfContents } from './../builder/generateTableOfContents';
import { buildHeadline, htmlPageWrapper } from "../ui";

export class AllProject {
    private output: string = '';
    private type: string = '';
    constructor(type: string) {
        this.type = type;
        this.output = buildHeadline("Holy Theory project", 1, type) + "\n";;
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