function solution(n){
    if (n % 5 === 0) return n / 5;
    
    let boxCount5 = ~~(n / 5);

    while (boxCount5 > -1) {
        if ((n - (boxCount5 * 5)) % 3 === 0) {
            return boxCount5 + ~~(((n - (boxCount5 * 5)) / 3));
        }
        boxCount5--;
    }

    return -1;
}

console.log(solution(15));