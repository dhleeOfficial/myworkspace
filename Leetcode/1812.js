/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const isOdd = num => num%2 === 1;

    return Boolean(isOdd(coordinates.charCodeAt(0) - 96) ^ isOdd(coordinates[1]));
};

console.log(squareIsWhite('h8'));