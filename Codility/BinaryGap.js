function solution(N) {
    let temp = 0;
    let longestGap = 0;
    let firstOne = false;

    while (N !== 0) {
        if (N % 2 === 0 && firstOne) temp++;
        if (N % 2 === 1 && !firstOne) firstOne = true;
        if (N % 2 === 1 && firstOne) {
            longestGap = longestGap < temp ? temp : longestGap;
            temp = 0;
        }

        N = ~~(N / 2);
    }

    return longestGap;
}

console.log(solution(9));