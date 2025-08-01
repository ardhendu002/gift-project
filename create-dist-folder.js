// create-dist-folder.js
const fs = require('fs');
const path = './src/dist';

if (!fs.existsSync(path)) {
  fs.mkdirSync(path, { recursive: true });
}
