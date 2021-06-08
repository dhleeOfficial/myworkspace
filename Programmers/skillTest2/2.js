function solution(info, query) {
    let processQuery = [];

    for (let i = 0; i < query.length; ++i) {
        const idx = query[i].lastIndexOf(' ');
        const prefix = query[i].substring(0, idx).split(` and `);
        const score = +query[i].substring(idx + 1, query[i].length);

        processQuery.push({
            lang: prefix[0],
            job: prefix[1],
            career: prefix[2],
            food: prefix[3],
            score,
        });
    }

    let answer = [];

    for (let i = 0; i < processQuery.length; ++i) {
        const queries = processQuery[i];
        let count = 0;

        for (let j = 0; j < info.length; ++j) {
            const employee = info[j].split(' ');

            if (employee[0] === queries.lang || queries.lang === '-') {
                if (employee[1] === queries.job || queries.job === '-') {
                    if (employee[2] === queries.career || queries.career === '-') {
                        if (employee[3] === queries.food || queries.food === '-') {
                            if (employee[4] >= queries.score) {
                                count++;
                            }
                        }
                    }
                }
            }
        }
        answer.push(count);
    }

    return answer;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],
["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));