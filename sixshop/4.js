function solution(foods) {
    if (foods.length < 3) return 0;

    let answer = 0;
    let first = 0;

    for (let i = 0; i < foods.length - 2; ++i) {
        first += foods[i];

        let second = 0;

        for (let j = i + 1; j < foods.length - 1; ++j) {
            second += foods[j];

            let third = 0;

            for (let k = j + 1; k < foods.length; ++k) {
                third += foods[k];
            }
            
            if (( first === second ) && ( second === third)) answer++;
        }
    }

    return answer;
}

console.log(solution([1,2,3,0,3]));