const fs = require('fs');
const path = require('path');
const parseMD = require('parse-md');

const folders = [
    'algorithms',
    'javascript',
    'patterns',
    'questions',
    'structures',
    'system-design',
    'training'
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
    data.push(getFiles(path.join('./',e)));;
})

console.log(data);
