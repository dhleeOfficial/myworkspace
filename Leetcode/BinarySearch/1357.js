/**
 * @param {number[][]} grid
 * @return {number}
 */
 let countNegatives = function(grid) {
    const m = grid.length;
    let res = 0;

    for (let i = 0; i < m; ++i) {
        const n = grid[i].length;

        res += binarySearch(grid[i], 0, n - 1, n);
    }

    return res;
};

const binarySearch = (arr, left, right, size) => {
    if (arr[left] < 0 && arr[right] < 0) {
        return size - left;
    }
    if (left === right) {
        if (arr[left] < 0) {
            return size - left;
        } else {
            return size - left - 1;
        }
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < 0) {
        return binarySearch(arr, 0, mid - 1, size);
    } else {
        return binarySearch(arr, mid + 1, right, size)
    }
}