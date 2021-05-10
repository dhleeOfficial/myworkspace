/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let res = [];
    let carry = 0;
    let pos1 = num1.length - 1;
    let pos2 = num2.length - 1;

    while (pos1 >= 0 || pos2 >= 0) {
        let n1 = pos1 > -1 ? parseInt(num1.charAt(pos1--)) : 0;
        let n2 = pos2 > -1 ? parseInt(num2.charAt(pos2--)) : 0;
        let sum = n1 + n2 + carry;

        if (sum >= 10) {
            res.splice(0, 0, sum % 10);
            carry = 1;
        } else {
            res.splice(0, 0, sum);
            carry = 0;
        }

    }

    if (carry != 0) res.splice(0, 0, carry);

    return res.join('');
};

console.log(addStrings("9333852702227987", "85731737104263"));