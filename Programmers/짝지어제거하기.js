function solution(s) {
    const stack = [];
    const compareToTop = (c) => {
        const stackSize = stack.length;

        if (stackSize === 0) return false;
        
        const top = stack[stackSize - 1];
        if (top === c) return true;

        return false;
    }

    for (let c of s) {
        if (compareToTop(c) === false) stack.push(c);
        else stack.pop();
    }

    return stack.length === 0 ? 1 : 0;
}

console.log(solution('cdcd'));