/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    const keyboard = {
        1: 'qwertyuiop',
        2: 'asdfghjkl',
        3: 'zxcvbnm'
    };

    const answer = [];

    words.forEach(e => {
        e.toLowerCase();

        let firstChar = 0;

        for (let prop in keyboard) {
            if (keyboard[prop].includes(e.charAt(0))) {
                firstChar = prop;
                break;
            }
        }

        for (let i = 1; i < e.length; ++i) {
            for (let prop in keyboard) {
                if (keyboard[prop].includes(e[i])) {
                    if (firstChar !== prop) 
                }
            }
        }

    });
};