/*
    [Sequencial Search]

    - 탐색: 여러 데이터 중에서 원하는 데이터를 찾아내는 것
    - 순차 탐색: 데이터가 담겨 있는 배열을 앞에서부터 하나씩 비교하여 원하는 데이터를 찾는 방법
*/

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SequencialSearch = (arr, target) => {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}