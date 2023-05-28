import fs from 'fs';

let config = null;
export const getConfig = () => {
    if (config) return config;
    console.log('get from disk')
    config = JSON.parse(fs.readFileSync('./builder/config.json', 'utf-8'));
    return config;
}