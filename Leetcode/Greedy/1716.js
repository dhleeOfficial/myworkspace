/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    const money = [1, 2, 3, 4, 5, 6, 7];
    let total = 0;

    let weeks = parseInt(n / 7);
    let days = n % 7;

    for (let i = 0; i < weeks; ++i) {
        total = money.reduce((accum, currentValue) => {
            return accum + currentValue + i;
        }, total)
    }
    
    return money.reduce((accum, currentValue, currentIndex) => {
        if (currentIndex < days) {
            return accum + currentValue + weeks;
        }

        return accum;
    }, total)
};

console.log(totalMoney(10));