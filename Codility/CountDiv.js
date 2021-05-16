function solution(A, B, K) {
    let count = 0;

    if (A % K === 0) count++;

    if (A !== B) count += ~~(B / K) - ~~(A / K);

    return count;
}

console.log(solution(6, 11, 1));