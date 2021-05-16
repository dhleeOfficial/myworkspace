function solution(A) {
    if (A.length === 0) return 0;
    
    let set = new Set(A);

    return set.size;
}

console.log(solution([2, 1, 1, 2, 3, 1]));