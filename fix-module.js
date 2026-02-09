const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist', 'happy-ghumakkads', 'browser', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');
content = content.replace('type="module"', '');
fs.writeFileSync(indexPath, content);
console.log('Fixed module type in index.html');
