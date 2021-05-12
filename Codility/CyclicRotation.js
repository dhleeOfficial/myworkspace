function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const size = A.length;

    if (size === 0) return [];
    if (K === 0) return A;

    const shiting = K % size;

    if (shiting === 0) return A;

    let set = new Set(A);

    if (set.size === 1) return A;

    let res = A.slice().fill(0);

    console.log(shiting);

    for (let i = 0; i < size; ++i) {
        let inputIdx = (i + shiting >= size) ? i + shiting - size : i + shiting;
        res[inputIdx] = A[i];
    }

    return res;
}

console.log(solution([0,0,0], 100));
