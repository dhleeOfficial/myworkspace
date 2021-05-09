/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    while (parseInt(num / 10) !== 0) {
        let temp = 0;

        while (parseInt(num / 10) !== 0) {
            temp += num % 10;
            num = parseInt(num / 10);
        }

        temp += num;
        num = temp;
    }

    return num;
};

console.log(addDigits(238));