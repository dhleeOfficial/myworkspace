function solution(A) {
    A.sort((a, b) => a - b);

    let set = new Set(A);
    let res = 1;

    for (let value of set.values()) {
        if (value >= res) {
            if (value === res) res++;
            else return res;
        }
    }
    
    return res;
}

console.log(solution([1, 2, 3, 1, 1, 5, 6, 4]));