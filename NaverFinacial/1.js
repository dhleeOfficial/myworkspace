function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let answer = 0;

    for (let i = A; i <= B; ++i) {
        isConsecutiveInDivisor(i) && answer++;
    }

    return answer;
}

function isConsecutiveInDivisor(v) {
    let temp = 1;

    for (let i = 2; i <= v; ++i) {
        if (v % i === 0) {
            if (i === temp + 1 && temp * i === v) return true;
            else temp = i;
        }
    }

    return false;
}

console.log(solution(21, 29));