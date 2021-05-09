/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    const type = ['R', 'L'];

    let _balancedCount = 0;
    let _result = 0;

    for (const value of s) {
        if (value === type[0]) {
            _balancedCount++;
        } else if (value === type[1]) {
            _balancedCount--;
        }
    }
};

balancedStringSplit("RLRRLLRLRL")