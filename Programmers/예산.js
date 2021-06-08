function solution(d, budget) {
    d.sort((a, b) => a - b);

    let answer = 0;
    let budgetSum = 0;

    d.forEach(elem => {
        budgetSum += elem;

        if (budgetSum > budget) return answer;
        answer++;
    });

    return answer;
}

console.log(solution([2,2,3,3], 10));