function solution(A) {
    A.sort((a, b) => a - b);

    let p = 1;

    for (let v of A) {
        if (p === v) ++p;
        else return 0;
    }

    return 1;
}

console.log(solution([4, 1, 3, 2]));