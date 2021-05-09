/**
 * @param {number[]} A
 * @return {number[]}
 */
 var sortArrayByParity = function(A) {
    let idx = 0;
    let size = A.length;
    let sumOfOdd = 0;

    for (const value of A) {
        if (value % 2 === 1) sumOfOdd++;
    }

    let numOfOdd = 0;

    while (idx !== size - 1) {
        if (A[idx] % 2 === 1) {
            const odd = A[idx];

            A.splice(idx, 1);
            A.push(odd);

            numOfOdd++;

            if (numOfOdd === sumOfOdd) {
                break;
            }
        } else {
            idx++;
        }
    }

    return A;
};

console.log(sortArrayByParity([3,1,2,4]));