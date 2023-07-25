const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.txt');
const { count, partial_sum } = require('../../utils.js');

fs.readFile(filePath, 'utf8', applyLogic);

function applyLogic(err, data) {
    const opening = count(data, '(');
    const closing = count(data, ')');
    console.log(opening - closing);
};
