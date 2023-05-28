import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';
import pug from 'pug';
import { marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import hljs from 'highlight.js';

import { compile } from '@eit6609/markdown-templates';
import { LanguageMap } from './language-map.js';
marked.use({
    langPrefix: ''
})
marked.use(markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  }));
marked.use(mangle());
marked.use(gfmHeadingId());


class Templates {
    constructor(paths) {
        this.paths = paths;
        this.load();
    }

    load() {
        console.log(this.paths);
    }

    getTemplate() {

    }

}

function Builder() {
    class Entity {

        constructor(name, category, meta, content) {
            this.id = this.makeId(name);
            this.name = name;
            this.meta = meta;
            this.content = content;
            this.category = category;
        }

        setTemplate(path, type) {

        }

    }

    let mainOutput = '';
    let tagsOutput = '';
    let languageOutput = '';

    const entity = {
        meta: {
            srcPath: "",
            id: "",
            tags: [],
            languages: [],
            title: "",
        },
        body: "",
        main: {
            path: "",
            link: ""
        },
        tags: {
            path: "",
            link: ""
        },
        language: {
            path: "",
            link: ""
        }
    }

    const folders = [
        'algorithms',
        'javascript',
        'patterns',
        'questions',
        'structures',
        'system-design',
        'training'
    ];

    const languagesMap = new Map();

    const getFiles = (dir) => {
        let results = [];
        fs.readdirSync(dir).forEach((file) => {
            file = dir + '/' + file;
            const stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                results = results.concat(getFiles(file))
            } else {
                if (path.extname(file) === '.md') {
                    results.push(file);
                }
            }
        });
        return results;
    }

    let testData = [];

    let data = [];

    let lm = new LanguageMap()

    folders.forEach((e) => {
        data.push(getFiles(path.join('./', e)));
    })
    data.forEach((group) => {
        for (let index = 0; index < group.length; index++) {
            const item = group[index];
            const fileContents = fs.readFileSync(item, 'utf8');
            const { metadata, content } = parseMD(fileContents);
            // console.log(metadata);

            if (metadata.languages.length > 0) {
                lm.setFromArr(metadata.languages);
            }
            testData.push({
                title: metadata.title,
                body: marked.parse(content),
                bodyMD: content
            });
        }
    })

    const paths = [
        {
            path: './builder/views/article.pug',
            title: 'article',
            type: 'pug'
        },
        {
            path: './builder/views/layout.pug',
            title: 'layout',
            type: 'pug'
        },
        {
            path: './builder/views/languages.pug',
            title: 'languages',
            type: 'pug'
        },
        {
            path: './builder/views/languages.pug',
            title: 'languages',
            type: 'pug'
        },
        {
            path: './builder/views/index.pug',
            title: 'index',
            type: 'pug'
        },
        {
            path: './builder/views/articles.md',
            title: 'articlesMD',
            type: 'md'
        },
    ]

    // console.log(lm.get())
    const obj = Object.fromEntries(lm.get())
    // console.log(obj)
    let article = fs.readFileSync('./builder/views/article.pug', 'utf-8');
    const articleFunction = pug.compile(article);

    let layout = fs.readFileSync('./builder/views/layout.pug', 'utf-8');
    const layoutFunction = pug.compile(layout);

    let languages = fs.readFileSync('./builder/views/languages.pug', 'utf-8');
    const languagesFunction = pug.compile(languages);

    let articleMD = fs.readFileSync('./builder/views/article.md', 'utf-8');

    const articleMDFunction = compile(articleMD);

    let articles = [];

    testData.forEach((item) => {
        articles.push(articleFunction(item));
        fs.writeFileSync(`./builder/test/md/${item.title.replace('\/', '-')}.md`, articleMDFunction(item));

    });

    let o = layoutFunction({
        header: 'Holy Theory',
        values: articles
    })

    fs.writeFileSync('./builder/test/check.html', o)
    fs.writeFileSync('./builder/test/languages.html',
        languagesFunction({
            values: obj
        }))
}


export { Builder };