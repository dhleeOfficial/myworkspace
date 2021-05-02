/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let insertIdx = -1;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] < target){
            insertIdx = i;
        } else {
            if (insertIdx !== -1) {
                return insertIdx + 1;
            }
        }
    }

    return insertIdx + 1;
};

console.log(searchInsert([1, 3, 5, 6], 7));