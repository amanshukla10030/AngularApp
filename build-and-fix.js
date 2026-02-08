const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building Angular app...');
execSync('ng build', { stdio: 'inherit' });

console.log('Fixing module type in index.html...');
const indexPath = path.join(__dirname, 'dist', 'happy-ghumakkads', 'browser', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');
content = content.replace('type="module"', '');
fs.writeFileSync(indexPath, content);

console.log('Build complete and module type fixed!');
