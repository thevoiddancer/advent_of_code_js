const { count } = require('../src/utils.js');

const arr_count = [1, 2, 1, 3];
const str_count = 'abca'
const params_arr_count = [
    [arr_count, 2, 1], 
    [arr_count, 1, 2], 
    [arr_count, 4, 0],
    [str_count, 'a', 2], 
    [str_count, 'b', 1], 
    [str_count, 'd', 0],
];

describe('Util functions', () => {
    test.each(params_arr_count)('count(%p, %p) ==  %p', (array, target, expected) => {
        const result = count(array, target);
        expect(result).toBe(expected);
    });
});