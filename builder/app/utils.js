import fs from 'fs';

let config = null;
export const getConfig = () => {
    if (config) return config;
    config = JSON.parse(fs.readFileSync('./builder/config.json', 'utf-8'));
    return config;
}