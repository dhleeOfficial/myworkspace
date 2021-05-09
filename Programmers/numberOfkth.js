function solution(array, commands) {
    let answer = [];

    for (let value of commands) {
        answer.push(kth(value, array));
    }

    return answer;
}

const kth = (command, array) => {
    const i = command[0];
    const j = command[1];
    const k = command[2];

    let splitArr = array.filter((val, idx) => {
        return idx + 1 >= i && idx + 1 <= j;
    })

    splitArr.sort((a, b) => a - b);

    return splitArr[k - 1];
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));