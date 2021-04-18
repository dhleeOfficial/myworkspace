/*
    [Selection Sort]
        제자리 정렬 알고리즘 ( in-place sorting )
            - 입력 배열 이외에 다른 추가 메모리를 요구하지 않는 정렬 방법
        다음과 같은 순서를 반복하며 정렬하는 알고리즘
            1. 주어진 데이터 중, 최솟값을 찾음
            2. 해당 최솟값을 데이터 맨 앞에 위치한 값과 교체함
            3. 맨 앞의 위치를 뺀 나머지 데이터를 동일한 방법으로 반복함
        복잡도
            - 반복문이 두 개 O(n^2)
            - 실제로 상세하게 계산하면, n * (n - 1) / 2
        장점
            - 자료 이동 횟수가 미리 결정
            - 데이터의 양이 적을 때 좋은 성능을 나타냄
            - 작은 값을 선택하기 위해서 비교는 여러번 수행되지만 교환 횟수가 적음
        단점
            - 안정성이 없음 -> 같은 값이 있는 경우, 상대적인 위치가 변경될 수 있음
*/

const SelectionSort = (unSortedArr) => {
    const len = unSortedArr.length;

    if (len <= 1) {
        return unSortedArr;
    }

    let start = 0;

    while (start < len - 1) {
        let min = unSortedArr[start];
        let idx = start;

        for (let i = start + 1; i < len; ++i) {
            if (min > unSortedArr[i]) {
                min = unSortedArr[i];
                idx = i;
            }
        }

        if (idx !== start) {
            let temp = unSortedArr[idx];

            unSortedArr[idx] = unSortedArr[start];
            unSortedArr[start] = temp;
        }

        start++;
    }
    return unSortedArr;
}

console.log(SelectionSort([3, 1, 19, 29, 90, 39, 85, 30]));
// console.log(SelectionSort([3]));