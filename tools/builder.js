import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';
import pug from 'pug';
import { marked } from 'marked';
import { compile } from '@eit6609/markdown-templates';
class LanguageMap {

    constructor() {
        this.map = new Map();
    }

    set(element) {
        if (element && this.map.get(element)) {
            this.map.set(element, this.map.get(element) + 1);
        } else {
            element ? this.map.set(element, 1) : null;
        }
    }

    setFromArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.set(arr[i]);
        }
    }

    get() {
        return this.map;
    }
    getObj() {
        return Object.fromEntries(this.map);
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

// console.log(lm.get())
const obj = Object.fromEntries(lm.get())
console.log(obj)
let article = fs.readFileSync('./tools/views/article.pug', 'utf-8');
const articleFunction = pug.compile(article);

let layout = fs.readFileSync('./tools/views/layout.pug', 'utf-8');
const layoutFunction = pug.compile(layout);

let languages = fs.readFileSync('./tools/views/languages.pug', 'utf-8');
const languagesFunction = pug.compile(languages);

let articleMD = fs.readFileSync('./tools/views/article.md', 'utf-8');

let articleMDFunction = compile(articleMD);

let articles = [];

testData.forEach((item) => {
    articles.push(articleFunction(item));
    fs.writeFileSync(`./tools/test/md/${item.title}.md`, articleMDFunction(item));

});

let o = layoutFunction({
    header: 'Holy Theory',
    values: articles
})

// fs.writeFileSync('./tools/test/check.html', o)
fs.writeFileSync('./tools/test/languages.html',
    languagesFunction({
        values: obj
    }))