/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
     let even = 0, odd = 0;

    for (let value of position) {
        value % 2 === 0 ? even++ : odd++;
    }

    return Math.min(even, odd);
};

console.log(minCostToMoveChips([1, 100000000]));