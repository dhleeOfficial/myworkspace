import { expect, test } from '@jest/globals';

const MaxRectangleArea = require('./safe');

/*
    금고 형태 - map
*/
const safe = new Map();

safe.set(0, { A: [ 8, 9 ], B: [ 0, 5, 6 ], C: [ 1, 2, 3, 4, 7 ] });
safe.set(1, { A: [ 1, 5, 8, 9 ], B: [ 0, 3, 4, 6, 7 ], C: [ 2 ] });
safe.set(2, { A: [ 4, 5, 6 ], B: [ 0, 2, 7, 9 ], C: [ 1, 3, 8 ] });
safe.set(3, { A: [ 3, 6, 9 ], B: [ 0, 1, 2, 5, 8 ], C: [ 4, 7 ] });
safe.set(4, { A: [ 0, 1, 2, 4, 8 ], B: [ 7 ], C: [ 3, 5, 6, 9 ] });
safe.set(5, { A: [ 0, 3, 4 ], B: [ 1, 2, 6 ], C: [ 5, 7, 8, 9 ] });
safe.set(6, { A: [ 2, 3, 8, 9 ], B: [ 1, 5, 6 ], C: [ 0, 4, 7 ] });

describe('Max rectangle test', () => {
    test('Max rectangle area is', () => {
        expect(MaxRectangleArea(safe)).toBe(32);
    });
    test('Max rectangle area is', () => {
        expect(MaxRectangleArea(safe)).toBe(14);
    });
});