/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
 var canReach = function(arr, start) {
    if (arr.length === 1) {
        if (arr[start] === 0) return true;
        else return false;
    }

    const visited = new Array(arr.length).fill(false);
    const dfs = (targetIdx) => {
        if (arr[targetIdx] === 0) return true;

        if (targetIdx >= arr.length || targetIdx < 0) return false;
        if (visited[targetIdx] === true) return false;

        visited[targetIdx] = true;
            
        const plus = targetIdx + arr[targetIdx];
        const minus = targetIdx - arr[targetIdx];

        return dfs(plus) || dfs(minus);
    }

    return dfs(start);
};

console.log(canReach([3,0,2,1,2], 2));