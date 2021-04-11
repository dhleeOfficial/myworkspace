/*
    [BubbleSort]
    
    두 인접한 데이터를 비교해서, 앞에 있는 데이터가 뒤에 있는 데이터보다 크면, 자리를 바꾸는 정렬 알고리즘
    
    - 한 바퀴를 돌 때마다, 마지막 인덱스에는 가장 큰 값이 남게 된다.
    - O(n^2) 복잡도를 가짐 ( 성능이 좋지 않음 )
*/
const BubbleSort = (unSortedArr) => {
    if (unSortedArr.length <= 1) {
        return unSortedArr;
    }

    let last = unSortedArr.length - 1;

    while (true) {
        if (last === 1) {
            break;
        }
        for (let i = 0; i < last; ++i) {
            if (unSortedArr[i] > unSortedArr[i + 1]) {
                let temp = unSortedArr[i + 1];
    
                unSortedArr[i + 1] = unSortedArr[i];
                unSortedArr[i] = temp;
            }
        }
        last--;
    }

    return unSortedArr;
}

console.log(BubbleSort([12, 1, 14, 9, 40, 21]));