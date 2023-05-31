import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';
import { marked } from './marked.js';
import { LanguageMap } from './language-map.js';
import { getConfig } from './utils.js';
import { Templates } from './templates.js';


const paths = getConfig().templates;


const templates = new Templates(paths);
const nav = templates.getData()['nav'].build();


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

    const folders = getConfig().folders;

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
            const pathObj = path.parse(item);
            const fileContents = fs.readFileSync(item, 'utf8');
            const { metadata, content } = parseMD(fileContents);
            // console.log(metadata);
            let cleanedContent = content.replace('* [Go back](../readme.md)', '');
            if (metadata.languages.length > 0) {
                lm.setFromArr(metadata.languages);
            }
            testData.push({
                title: metadata.title,
                body: marked.parse(cleanedContent),
                bodyMD: cleanedContent,
                
                meta: {
                    category: pathObj.dir,
                    fileName: {
                        original: pathObj.name,
                        dashed: pathObj.name.replace(' ', '-').toLowerCase()
                    }
                }
            });
        }
    })

    let articles = [];

    testData.forEach((item) => {
        console.log(item);
        articles.push(templates.getData()['article'].build(item));
        fs.writeFileSync(`./builder/test/md/${item.title.replace('\/', '-')}.md`, templates.getData()['articleMD'].build(item));

    });

    let o = templates.getData()['layout'].build({
        header: 'Holy Theory',
        values: articles,
        navigation: nav
    })

    fs.writeFileSync('./builder/test/index.html', templates.getData()['index'].build(
        { navigation: nav }
    ))
    fs.writeFileSync('./builder/test/all.html', o)
    fs.writeFileSync('./builder/test/languages.html',
        templates.getData()['languages'].build({
            navigation: nav,
            values: Object.fromEntries(lm.get())
        }))
}


export { Builder };