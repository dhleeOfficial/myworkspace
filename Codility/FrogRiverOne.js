// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let set = new Set();
    const checkSet = () => {
        if (set.size === X) return true;
        
        return false;
    }

    for (let i = 0; i < A.length; ++i) {
        set.add(A[i]);

        if (checkSet() === true) return i;
    }

    return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 4, 4]));
