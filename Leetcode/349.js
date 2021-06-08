/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const set = new Set();

    for (let i = 0; i < nums1.length; ++i) {
        if (nums2.includes(nums1[i])) set.add(nums1[i]);
    }

    return Array.from(set);
};

console.log(intersection([4,9,5], [9,4,9,8,4]));