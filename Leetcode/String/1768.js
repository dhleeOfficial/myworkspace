/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let res = '';
    let idx = 0;

    while (true) {
        if (!word1[idx] && !word2[idx]) return res;

        if (word1[idx]) res += word1[idx];
        if (word2[idx]) res += word2[idx];

        idx++;
    }
};

console.log(mergeAlternately('ab', 'pqrs'));