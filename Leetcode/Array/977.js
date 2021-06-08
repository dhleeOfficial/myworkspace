/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    const set = new Set(nums);
    const answer = [];

    for (let v of set) {
        answer.push(v * v);
    }

    return answer.sort((a, b) => a - b);
};

console.log(sortedSquares([-4,-1,0,3,10]));