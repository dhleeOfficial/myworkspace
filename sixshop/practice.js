function solution(v) {
    const xMap = new Map();
    const yMap = new Map();

    v.forEach(elem => {
        const x = elem[0];
        const y = elem[1];

        insertMap(xMap, x);
        insertMap(yMap, y);
    });


    
    return [ findMapValue(xMap), findMapValue(yMap) ];
}

function insertMap(map, elem) {
    if (!map.has(elem)) map.set(elem, 1);
    else map.set(elem, map.get(elem) + 1);
}

function findMapValue(map) {
    for (let [key, value] of map.entries()) {
        if (value === 1) return key;
    }
}

console.log(solution([[1, 1], [2, 2], [1, 2]]));