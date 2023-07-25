const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.txt');
const { count } = require('../../utils.js');

// let d = fs.readFile(filePath, 'utf8', apply_logic)

// function apply_logic(err, data) {
// }

console.log(count('abscded', 'd'));