function solution(nums) {
    let res = 0;

    for (let i = 0; i < nums.length - 2; ++i) {
        for (let j = i + 1; j < nums.length - 1; ++j) {
            for (let k = j + 1; k < nums.length; ++k) {
                if (isPrime(nums[i] + nums[j] + nums[k])) res += 1;
            }
        }
    }

    return res;
}

const isPrime = (n) => {
    if (n % 2 === 0) return false;

    let divisor = 3;

    while (divisor < n) {
        if (n % divisor === 0) return false;

        divisor += 2;
    }

    return true;
}

console.log(solution([1,2,7,6,4]));