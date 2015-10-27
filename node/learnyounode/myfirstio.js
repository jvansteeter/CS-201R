var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var lines = file.toString().split('\n');
console.log(lines.length - 1);