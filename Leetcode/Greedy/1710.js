/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => {
        return b[1] - a[1];
    })

    console.log(boxTypes);

    let result = 0;

    for (const value of boxTypes) {
        let numberOfBox = value[0];
        const unitOfBox = value[1];

        while (numberOfBox > 0) {
            if (truckSize === 0) return result;

            result += unitOfBox;
            numberOfBox--;
            truckSize--;
        }
    }

    return result;
};

console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35));