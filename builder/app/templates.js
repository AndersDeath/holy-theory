import fs from 'fs';
import pug from 'pug';
import { compile } from '@eit6609/markdown-templates';

class Templates {
    constructor(paths, indexName) {
        this.paths = paths;
        this.data = [];
        this.indexBuilder;
        if (indexName) {
            this.indexName = indexName;
            this.getIndexBuild();
        }
        
        this.load();
    }

    load() {
        this.paths.forEach(element => {
            this.data[element.title] = this.build(element);
        });
    }

    getIndexBuild() {
        const index = this.paths.filter(((el) => el.title === this.indexName))[0];
        const file = fs.readFileSync(index.path, 'utf-8');
        this.indexBuilder = pug.compile(file);
    }

    build(element) {
        const file = fs.readFileSync(element.path, 'utf-8');
        if (element.type === 'pug') {
            if (this.indexName && element.title !== this.indexName && !element.noIndex) {
                return {
                    file: file,
                    build: (params) => {
                        return this.indexBuilder({
                            content: pug.compile(file)(params)
                        });
                    }
                }
            } else {
                return {
                    file: file,
                    build: pug.compile(file)
                }
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