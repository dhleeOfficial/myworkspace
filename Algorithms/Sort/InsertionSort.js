/*
    [Insertion Sort]
        - 삽입 정렬은 두 번째 인덱스부터 시작
        - 해당 인덱스( key 값 ) 앞에 있는 데이터( B )부터 비교해서 key 값이 더 작으면,
          B값을 뒤 인덱스로 복사
        - 이를 key 값이 더 큰 데이터를 만날 때까지 반복
        - 그리고 큰 데이터를 만난 위치 바로 뒤에 key 값을 이동
        
        복잡도
            - O(n^2)
            - 최악의 경우, n * (n - 1) / 2
            - 완전 정렬이 되어 있는 상태라면 O(n)
*/

const InsertionSort = (unSortedArr) => {
    const len = unSortedArr.length;

    if (len <= 1) {
        return;
    }

    for (let i = 1; i < len; ++i) {
        let temp = unSortedArr[i];
        let j;

        for (j = i - 1; j >= 0 && temp < unSortedArr[j]; j--) {
            unSortedArr[j + 1] = unSortedArr[j];

        }

        unSortedArr[j + 1] = temp;
    }

    return unSortedArr;
}

console.log(InsertionSort([9, 4, 28, 84, 1, 5]));