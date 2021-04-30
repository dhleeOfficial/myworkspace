/*
    # Binary Search
        - 탐색할 자료를 둘로 나누어 해당 데이터가 있을만한 곳을 탐색하는 방법
        - 데이터가 정렬되어 있는 배열에서 특정한 값을 찾아내는 알고리즘
        - 정렬된 배열의 중간에 임의의 값을 찾고자하는 값과 비교하여,
            - 중간의 값이 더 작다면, 중간의 값을 제외한 배열의 우측 데이터들을 대상으로 탐색 진행
            - 중간의 값이 더 크다면, 중간의 값을 제외한 배열의 좌측 데이터들을 대상으로 탐색 진행
            - 중간의 값과 찾고자 하는 값이 동일하다면 알고리즘 중단
        - 시간 복잡도
            - 중간 값과 찾고자 하는 값의 비교가 이루어질때마다 탐색 범위가 1/2로 줄어듦
            - 자료의 개수 N에서 계속 1/2를 곱하는 형식으로 최종적으로 k번 하였을 때, 남은 자료의 수가 1이 되는 식이 됨
                - (1/2)^k * N = 1
                - K = logN
            - O(logN)
        - 장점
            - 선형 탐색과 비교하여 탐색 시간이 빠르다.
                - O(n)
        - 단점
            - 정렬된 리스트에서만 사용될 수 있다.
        
        - 분할 정복 알고리즘과 이진 탐색
            - 분할 정복 알고리즘 (Divce and Conquer)
                - Divide -> 문제를 하나 또는 둘 이상으로 나눈다.
                - Conquer -> 나눠진 문제가 충분히 작고, 해결이 가능하다면 해결하고 그렇지 않다면 다시 나눈다.
            - 이진 탐색
                - Divide -> 리스트를 두 개의 서브 리스트로 나눈다.
                - Conquer
                    -> 검색할 숫자 > 중간값이면, 뒷 부분의 서브 리스트에서 검색할 숫자를 찾는다.
                    -> 검색할 숫자 < 중간값이면, 앞 부분의 서브 리스트에서 검색할 숫자를 찾는다.
*/

const BinarySearch = (SortedArr, find, left, right) => {
    if (SortedArr.length === 1) {
        if (SortedArr[0] === find) {
            return SortedArr[0];
        } else {
            return -1;
        }
    }

    if (left > right) {
        return -1;
    }

    const mid = (left + right) / 2;

    if (SortedArr[mid] === find) {
        return mid;
    } else {
        if (SortedArr[mid] > find) {
            return BinarySearch(SortedArr, find, left, mid - 1)
        } else if (SortedArr[mid] < find) {
            return BinarySearch(SortedArr, find, mid + 1, right)
        }
    }
}

const array = [0, 1, 2, 3, 4, 5, 6];

console.log(BinarySearch(array, -1, 0, array.length - 1))