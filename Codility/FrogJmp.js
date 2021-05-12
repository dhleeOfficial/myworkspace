function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    // let jmpCount = 0;

    // while (true) {
    //     jmpCount++;
    //     X += D;
    //     console.log(X);

    //     if (X >= Y) return jmpCount;
    // }

    return Math.ceil((Y - X) / D);
}

console.log(solution(10, 85, 30));
