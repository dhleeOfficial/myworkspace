/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let nh = null;

    while (head) {
        const n = head.next;

        head.next = nh;
        nh = head;
        head = n;
    }

    return nh;
};