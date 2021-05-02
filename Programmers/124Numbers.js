function solution(n) {
    let answer = '';

    while (n > 0) {
        const remain = n % 3;

        if (remain !== 0) {
            answer = remain + answer;

            n = parseInt(n / 3);
        } else {
            answer = '4' + answer;

            n = parseInt(n / 3) - 1;
        }
    }

    return answer;
}

console.log(solution(24));