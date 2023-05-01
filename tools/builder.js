import fs from 'fs';
import path from 'path';
import parseMD  from 'parse-md';

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
    // 'javascript',
    // 'patterns',
    // 'questions',
    // 'structures',
    // 'system-design',
    // 'training'
];

const getFiles = (dir) => {
    let results = [];
    fs.readdirSync(dir).forEach((file) => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if(stat && stat.isDirectory()) {
            results = results.concat(getFiles(file))
        } else results.push(file);
    });
    return results;
}

let data = [];

folders.forEach((e) => {
    data.push(getFiles(path.join('./',e)));
})
data.forEach((group) => {
    for (let index = 0; index < group.length; index++) {
        const item = group[index];
        const fileContents = fs.readFileSync(item, 'utf8');
        const { metadata, content } = parseMD(fileContents);
        console.log(metadata);
        break;
        
    }
})
