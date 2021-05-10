/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let temp = 0;
    let max = 0;
    
    nums.forEach(v => {
        temp += v;

        if (temp < 0) temp = 0;
        else if (temp > max) max = temp;
    })

    if (max === 0) {
        nums.sort((a, b) => b - a);

        max = nums[0];
    }

    return max;
};

console.log(maxSubArray([5,4,-1,7,8]));