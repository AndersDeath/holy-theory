import fs from 'fs';
import path from 'path';
import parseMD  from 'parse-md';
import pug from 'pug';
import { marked } from 'marked';

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
        if(stat && stat.isDirectory()) {
            results = results.concat(getFiles(file))
        } else {
            if(path.extname(file) === '.md') {
                results.push(file);
            }
        }
    });
    return results;
}

let testData = [];

let data = [];

folders.forEach((e) => {
    data.push(getFiles(path.join('./',e)));
})
data.forEach((group) => {
    for (let index = 0; index < group.length; index++) {
        const item = group[index];
        const fileContents = fs.readFileSync(item, 'utf8');
        const { metadata, content } = parseMD(fileContents);
        // console.log(metadata);
        if(metadata.languages.length > 0) {
            for (let i = 0; i < metadata.languages.length; i++) {
                if(metadata.languages[i] && languagesMap.get(metadata.languages[i])) {
                    languagesMap.set(metadata.languages[i], languagesMap.get(metadata.languages[i]) + 1);
                } else {
                    metadata.languages[i] ? languagesMap.set(metadata.languages[i], 1) : null;
                }
            }
            
        }
        // testData.push({
        //     title: metadata.title,
        //     body: marked.parse(content)
        // });
    }
})

console.log(languagesMap)
const obj = Object.fromEntries(languagesMap)
console.log(obj)
let article =  fs.readFileSync('./tools/views/article.pug', 'utf-8');
const articleFunction = pug.compile(article);

let layout = fs.readFileSync('./tools/views/layout.pug', 'utf-8');
const layoutFunction = pug.compile(layout);

let articles = [];

testData.forEach((item) => {
    articles.push(articleFunction(item));
});

let o = layoutFunction({
    header: 'Holy Theory',
    values: articles
})

// fs.writeFileSync('./tools/test/check.html', o)