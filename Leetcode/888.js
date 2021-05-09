/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const sumA = A.reduce((acc, cv) => acc + cv);
    const sumB = B.reduce((acc, cv) => acc + cv);

    const differ = sumA - sumB;

    if (differ > 0) {
        for (const valueA of A) {
            for (const valueB of B) {
                if (valueB === valueA - parseInt(differ / 2)) {
                    return [valueA, valueB];
                }
            }
        }
    } else if (differ < 0) {
        for (const valueB of B) {
            for (const valueA of A) {
                if (valueB === valueA - parseInt(differ / 2)) {
                    return [valueA, valueB];
                }
            }
        }
    }
};

console.log(fairCandySwap([1,2,5], [2,4]));