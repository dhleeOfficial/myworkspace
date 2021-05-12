// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counters = new Array(N).fill(0);
    let max = 0;
    let tmp = 0;

    for (let v of A) {
        if (v <= N) {
            let idx = v - 1;

            counters[idx] = Math.max(counters[idx], max);
            counters[idx] += 1;
            tmp = Math.max(counters[idx], tmp);
        } else {
            max = tmp;
        }
    }

    return counters.map((v) => {
        return Math.max(v, max);
    })
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
