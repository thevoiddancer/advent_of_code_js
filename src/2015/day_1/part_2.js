const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'data.txt');
const { count, partial_sum } = require('../../utils.js');

const directionMap = {
    "(": 1,
    ")": -1,
};

function applyLogic(err, data) {
    data = Array.from(data, char => directionMap[char])
    let loc = data.reduce(
        (sum, currentValue, currentIndex) => {
            sum = sum + currentValue;
            if (sum === -1) {
                console.log("ind", currentIndex);
                return currentIndex;
            }
            return sum
        }, 0
    );
    console.log(loc);
}

function toBasement(str) {
    let level = 0;
    let i;

    for (i = 0; i < str.length; i++) {
        level += directionMap[str[i]];
        if (level == -1) {
            break;
        }
    }

    return i + 1;
};

fs.readFile(filePath, 'utf8', applyLogic);
