function solution(N, stages) {
    const map = new Map();
    let sum = stages.length;

    let key = 1;

    for (let i = 1; i <= N; ++i) {
        map.set(i, 0);
    }

    stages.forEach(e => {
        if (map.has(e)) map.set(e, map.get(e) + 1);
    });

    let failed = [];

    for (let [key, value] of map.entries()) {
        failed.push({key, fail: value / sum});
        sum -= value;
    }

    failed.sort((a, b) => b.fail - a.fail);

    let answer = [];

    failed.forEach(e => {
        answer.push(e.key);
    });

    return answer;
}

console.log(solution(4, [4,4,4,4,4]));