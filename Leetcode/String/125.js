/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const replace = s.replace(/ /g,"");
    let str = '';

    for (let i = 0; i < replace.length; ++i) {
        const code = replace.charCodeAt(i);

        if ((code >= 65 && code <=90) || (code >= 97 && code <= 122)) {
            str += replace[i].toLowerCase();
        } else if (code >= 48 && code <= 57) {
            str += replace[i];
        }
    }

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;

        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("race a car"));