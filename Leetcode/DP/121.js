/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let max = 0;

    for (let i = 1; i < prices.length; ++i) {
        if (buyPrice > prices[i]) buyPrice = prices[i];

        if (prices[i] - buyPrice > max) max = prices[i] - buyPrice;
    }

    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));