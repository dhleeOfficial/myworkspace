// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 0) return 1;

    A.sort((a, b) => a - b);

    let compare = 1;

    for (let v of A) {
        if (compare === v) compare++;
        else return compare;
    }

    return compare;
}

console.log(solution([2, 3, 1, 4, 6]));
