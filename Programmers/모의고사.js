function solution(answers) {
    let answer = [];
    let max = 0;

    const grading = (rules) => {
        let grade = 0;
        const len = rules.length;

        answers.forEach((v, i) => {
            if (v === rules[i % len]) {
                grade++;
            }
        });

        if (max < grade) max = grade;

        return grade;
    }
    const gradingArr = [grading([1, 2, 3, 4, 5]), grading([2, 1, 2, 3, 2, 4, 2, 5]), grading([3, 3, 1, 1, 2, 2, 4, 4, 5, 5])];
    
    gradingArr.forEach((v, i) => {
        if (max === v) answer.push(i + 1); 
    });
    
    return answer;
}

console.log(solution([1,3,2,4,2]));