/**
 * Counts the number of occurrences of a target value in an array.
 * @param {Array} array - The array to be searched.
 * @param {*} target - The value to be counted.
 * @returns {number} The count of occurrences of the target value in the array.
 */
function count(array, target) {
    let number = Array.from(array).reduce((count, element) => count + (element === target ? 1 : 0), 0);
    return number;
}

function partial_sum(array, index = null, goal = null) {
    var sum = 0;
    for (const [ind, el] in array) {
        sum += el;
        if (sum == goal || ind == index) {
            break;
        }
    }
    return [index, goal];
}

module.exports = { count, partial_sum };