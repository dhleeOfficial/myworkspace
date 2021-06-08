function solution(K, arr) {
    let answer = 0;

    for (let i = arr.length - 1; i >= 0; --i) {
        if (K <= 0) return answer;
        let temp = ~~(K / arr[i]);

        console.log(`temp = ${temp}`);

        K -= arr[i] * temp;
        answer += temp;
    }

    return answer;
}

console.log(solution(4790, [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]));