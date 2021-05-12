// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// O(n^2)
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let p = 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (p < A.length) {
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < A.length; ++i) {
            if (i < p) leftSum += A[i];
            else rightSum += A[i];
        }

        const abs = Math.abs(leftSum - rightSum);

        if (abs < min) min = abs;

        p++;
    }

    return min;
}

// O(n)
function solution2(A) {
    const sum = A.reduce((acc, value) => acc + value);

    let left = 0;
    let absArr = [];

    for (let i = 1; i < A.length; ++i) {
        left += A[i - 1];
        
        const right = sum - left;
        
        absArr.push(Math.abs(left - right));
    }

    return Math.min(...absArr);
}

console.log(solution2([3,1,2]));