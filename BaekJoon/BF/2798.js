let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(`input[0] = ${input[0]}`);
console.log(`input[1] = ${input[1]}`);


function solution(arr, target) {
    let temp = 0;

    for (let i = 0; i < arr.length - 2; ++i) {
        for (let j = i + 1; j < arr.length - 1; ++j) {
            for (let k = j + 1; k < arr.length; ++k) {
                const sum = arr[i] + arr[j] + arr[k];

                if (sum === target) return sum;
                else if (sum < target) {
                    if (temp < sum) temp = sum;
                }
            }
        }
    }
    
    return temp;
}

console.log(solution([93, 181, 245, 214, 315, 36, 185, 138, 216, 295], 500));