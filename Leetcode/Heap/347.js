/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const map = new Map();

    for (const v of nums) {
        if (!map.has(v)) map.set(v, 1);
        else map.set(v, map.get(v) + 1);
    }

    map[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
    }

    let answer = [];

    for (let [key, value] of map) {
        if (k > 0) {
            answer.push(key);
        }
        k--;
    }

    return answer;
};

console.log(topKFrequent([1], 1));