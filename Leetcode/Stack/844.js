/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return makeStackStr(s) === makeStackStr(t);
};

const makeStackStr = (str) => {
    let stack = [];

    for (let s of str) {
        if (s === '#') stack.pop();
        else stack.push(s);
    }

    return stack.join('');
}

console.log(backspaceCompare('a#c', 'b'));