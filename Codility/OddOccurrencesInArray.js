// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 1) return A[0];

    let mapping = new Map();

    for (let v of A) {
        if (mapping.has(v)) mapping.set(v, mapping.get(v) + 1);
        else mapping.set(v, 1);
    }

    for (let [key, value] of mapping.entries()) {
        if (value % 2 === 1) return key;
    }
}

console.log(solution([9,3,9,3,9,7,9]));
