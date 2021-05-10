/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let map = new Map();

    nums.forEach((v, i) => {
        if (!map.has(v)) {
            map.set(v, []);
        }

        let _value = map.get(v);

        _value.push(i);

        map.set(v, _value);
    })

    let numberOfPairs = 0;

    for (let value of map.values()) {
        let len = value.length;

        if (len <= 1) continue;

        while (len !== 0) {
            numberOfPairs += --len;
        }
    }

    return numberOfPairs;
};

console.log(numIdenticalPairs([1, 2, 3]));