const path=require('path');

// print the base name of the file not whole path
console.log(path.basename(__filename));

// print directory of the file same as __dirname
console.log(path.dirname(__filename));

// print the extension of file
console.log(path.extname(__filename));

// concatenate path
console.log(path.join(__dirname, 'temp','index.html'));