/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = (n % 2 === 0) ? [] : [0];
    let firstIdx = res.length;

    for (let i = 1; i <= (n / 2); ++i) {
        res.push(i);
        res.push(-i);
    }
    
    return res;
};

console.log(sumZero(4));