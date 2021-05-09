/**
 * @param {string} s
 * @return {number}
 */
 var minOperations = function(s) {
    let operations = 0;

    if (s.length === 1) return operations;

    for (let i = 0; i < s.length; ++i) {
        console.log(s[i]);
    }
};

minOperations('0100');