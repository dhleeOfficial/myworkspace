/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if (bills.length === 0) return true;
    if (bills[0] !== 5) return false;

    let remain = new Map();

    remain.set(5, 0);
    remain.set(10, 0);
    remain.set(20, 0);
    
    for (const value of bills) {
        let _value = remain.get(value);

        remain.set(value, _value + 1);

        let exchange = value - 5;
        let fiveValue = remain.get(5);
        let tenValue = remain.get(10);

        if (exchange === 15) {
            if (fiveValue === 0) return false;

            if (tenValue !== 0) {
                remain.set(10, tenValue - 1);
                remain.set(5, fiveValue - 1);
            } else {
                if (fiveValue < 3) return false;

                remain.set(5, fiveValue - 3);
            }
        } else if (exchange === 5) {
            if (fiveValue === 0) return false;

            remain.set(5, fiveValue - 1);
        }
    }

    return true;
};

console.log(lemonadeChange([5, 5, 10, 10, 20]));