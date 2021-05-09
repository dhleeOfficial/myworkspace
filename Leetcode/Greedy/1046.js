/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    if (stones.length === 1) return stones[0];

    while (true) {
        sorting(stones);

        const x = stones[1]
        const y = stones[0];

        if (x === y) {
            stones.splice(0, 2);
        } else {
            stones.splice(0, 2, y - x);

            console.log(stones);
        }

        if (stones.length === 1) return stones[0];
        else if (stones.length === 0) return 0;
    }
};

const sorting = (stones) => {
    return stones.sort((a, b) => b - a);
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));