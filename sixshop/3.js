// Brian Kernighan’s Algorithm

function solution(n) {
    const nCount = count(n);
    let answer = 0;

    for (let i = 1; i < n; ++i) {
        console.log(`i = ${i}`);
        if (countTarget(i, nCount)) answer++;
    }

    return answer;
}

function count(n) {
    let count = 0;

    while (n > 0) {
        n &= n - 1;
        count++;
    }

    return count;
}

function countTarget(n, target) {
    let count = 0;
    
    while (n > 0) {
        n &= n - 1;
        count++;
        
        if (count > target) return false;
    }
    
    return count === target ? true : false;
}

console.log(solution(9));