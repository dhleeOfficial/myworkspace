function solution(numbers) {
    const len = numbers.length;
    const set = new Set();

    for (let i = 0; i < len - 1; ++i) {
        for (let j = i + 1; j < len; ++j) {
            set.add(numbers[i] + numbers[j]);
        }
    }

    return Array.from(set).sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]));
// output : [2, 3, 4, 5, 6, 7]