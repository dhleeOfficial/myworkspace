function solution(N, relation) {
    const array = Array.from(Array(N + 1), () => new Array());

    relation.forEach(elem => {
        const i = elem[0];
        const j = elem[1];

        array[i].push(j);
        array[j].push(i);
    });

    
    const answer = [];

    for (let i = 1; i < array.length; ++i) {
        let friendCount = array[i].length;

        for (let j = 0; j < array[i].length; ++j) {
            const anotherFriends = array[array[i][j]];

            if (anotherFriends.length > 0) {
                let adjustCount = 0;

                for (let k = 0; k < anotherFriends.length; ++k) {
                    if (adjustCount === 2) break;
                    if (anotherFriends[k] !== i) friendCount++;

                    adjustCount++;
                }
            }
        }

        answer.push(friendCount);
    }


    return answer;
}

console.log(solution(7, [[1,2],[4,2],[3,1],[4,5], [6,7]]));