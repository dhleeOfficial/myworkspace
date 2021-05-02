/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    const words = address.split('.');
    let result = '';

    for (let i = 0; i < words.length; ++i) {
        if (i === words.length - 1) {
            result += words[i]
        } else {
            result += words[i] + '[.]';
        }
    }

    return result;
};

console.log(defangIPaddr('1.1.1.1'));