/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var rangeSumBST = function(root, low, high) {
    const stack = [root];
    const includes = [];

    while (stack.length > 0) {
        const node = stack.pop();

        if (low <= node.val && node.val <= high) {
            includes.push(node.val);
        }

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return includes.reduce((current, accum) => current + accum);
};

console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15));