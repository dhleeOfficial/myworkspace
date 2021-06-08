function solution(absolutes, signs) {
    let answer = 0;

    absolutes.forEach((v, i) => {
        signs[i] ? answer += v : answer -= v;
    });

    return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));