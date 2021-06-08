// var answer = -1;

function solution(paper) {
    paper.sort((a, b) => b - a);

    let gIndex = paper.length;

    while (gIndex >= 1) {
        const sum = paper.reduce((acc, cv, cI) => {
            if (cI <= gIndex - 1) {
                return acc + cv;
            }
            return acc;
        });

        if (sum >= Math.pow(gIndex, 2)) return gIndex;
        gIndex--;
    }

    return -1;
}

function solution1(paper) {
    paper.sort((a, b) => b - a);
    let temp = 0;
    let gIndex = 0;

    for (let i = 0; i < paper.length; ++i) {
        temp += paper[i];

        if (temp >= Math.pow(i + 1, 2)) {
            gIndex++;
        }
    }

    return gIndex === 0 ? -1 : gIndex;
}

console.log(solution1([7, 5, 8, 10, 6, 9, 5]));