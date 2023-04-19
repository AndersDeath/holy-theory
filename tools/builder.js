import fs from 'fs';
import path from 'path';
import parseMD  from 'parse-md';

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
        console.log(content);
        break
        
    }
})
