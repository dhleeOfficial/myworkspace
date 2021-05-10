/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {

    nums.sort((a, b) => b - a);
    
    for (let i = 0; i < nums.length - 2; ++i) {
        for (let j = i + 1; j < nums.length - 1; ++j) {
            if (nums[i] < nums[j] + nums[j + 1]) {
                return nums[i] + nums[j] + nums[j + 1];
            }
        }
    }

    return 0;
};

console.log(largestPerimeter([3, 6, 2, 3]));