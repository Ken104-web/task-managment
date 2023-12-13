const fs   = require('fs')
const path = require('path')

const appDir = './app';

function creatCssFileInDir(dir){
    fs.readdirSync(dir).forEach(file => {
        let filePath = path.join(dir, file);
        if (fs.lstatSync(filePath).isDirectory()) {
            const cssFilePath = path.join(filePath, `${file}.module.css`);
            fs.writeFileSync(cssFilePath, '', 'utf8');
            creatCssFileInDir(filePath);
            console.log(`Created ${cssFilePath}`);
        }
    });
}

creatCssFileInDir(appDir);
