/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return makeNumber(l1) + makeNumber(l2);
};

const makeNumber = function(node) {
    let num = 0;
    let digit = 1;

    while (node !== null) {
        num += node.val * digit;
        digit *= 10;

        node = node.next;
    }

    return num;
}