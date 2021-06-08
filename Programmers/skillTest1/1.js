function solution(numbers, hand) {
    const answer = [];

    let leftPos = '*';
    let rightPos = '#';

    numbers.forEach(num => {
        if (num === 1 || num === 4 || num === 7) {
            answer.push('L');
            leftPos = num;

            return;
        }

        if (num === 3 || num === 6 || num === 9) {
            answer.push('R');
            rightPos = num;

            return;
        }

        const leftDistance = getDistance(leftPos, num);
        const rightDistance = getDistance(rightPos, num);

        if (leftDistance === rightDistance) {
            if (hand === 'right') {
                answer.push('R');
                rightPos = num;

                return;
            }

            if (hand === 'left') {
                answer.push('L');
                leftPos = num;

                return;
            }
        }

        if (leftDistance > rightDistance) {
            answer.push('R');
            rightPos = num;
        }

        if (leftDistance < rightDistance) {
            answer.push('L');
            leftPos = num;
        }
    });

    return answer.join('');
}

function getDistance(locatedNumber, target) {
    const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    }

    const nowPos = keyPad[locatedNumber];
    const targetPos = keyPad[target];

    return Math.abs(targetPos[0] - nowPos[0]) + Math.abs(targetPos[1] - nowPos[1]);
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));