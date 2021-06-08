/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];

    const map = new Map();

    nums.forEach(num => {
        if (!map.has(num)) map.set(num, 1);
        else {
            map.delete(num);
        }
    });

    return Array.from(map.keys())[0];
};

console.log(singleNumber([4,1,2,1,2]));