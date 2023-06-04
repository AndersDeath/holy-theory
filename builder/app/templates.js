import fs from 'fs';
import pug from 'pug';
import { compile } from '@eit6609/markdown-templates';

class Templates {
    constructor(paths) {
        this.paths = paths;
        this.data = [];
        this.load();
    }

    load() {
        this.paths.forEach(element => {
            this.data[element.title] = this.build(element);
        });
    }

    build(element) {
        const file = fs.readFileSync(element.path, 'utf-8');
        if (element.type === 'pug') {
            return {
                file: file,
                build: pug.compile(file)
            }
        }
        if (element.type === 'md') {
            return {
                file: file,
                build: compile(file)
            }
        }
    }
    getData() {
        return this.data;
    }
    getTemplate() {

    }

}

export {
    Templates
}