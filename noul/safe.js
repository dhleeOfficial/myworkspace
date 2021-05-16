const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let row = 0;
const safe = new Map();

rl.on('line', (line) => {
    let roomA = [];
    let roomB = [];
    let roomC = [];

    maxWidth = line.length;

    for (let i = 0; i < line.length; ++i) {
        const alpha = line[i];

        alpha === 'A' ? roomA.push(i) : alpha === 'B' ? roomB.push(i) : roomC.push(i);
    }

    safe.set(row++, { A: roomA, B: roomB, C: roomC });
}).on('close', () => {
    console.log(`Max Rectangle area is = ${MaxRectangleArea(safe, maxWidth)}`);

    process.exit();
});

const MaxRectangleArea = (safe, maxWidth) => {
    if (safe.size <= 1) return 0;

    let maxArea = 0;
    const intersection = (c1, c2, r1, r2, maxWidth) => {
        const height = r2 - r1 + 1;
    
        if (Math.ceil(maxArea / maxWidth) <= height) {
            for (const p in c1) {
                if (c1[p].length > 1) {
                    const intersections = compareArray(c1[p], c2[p]);
                    const len = intersections.length;
    
                    if (len > 1) {
                        const width = intersections[len - 1] - intersections[0] + 1;
    
                        if (width * height > maxArea) {
                            maxArea = width * height;
                        }
                    }
                }
            }
        }
    }

    const compareArray = (arr1, arr2) => {
        let compares = [];
    
        for (let v1 of arr1) {
            for (let v2 of arr2) {
                if (v1 === v2) {
                    compares.push(v1);
                    break;
                }
            }
        }
    
        return compares;
    }

    for (let i = 0; i < safe.size - 1; i++) {
        const criteria = safe.get(i);

        for (let j = i + 1; j < safe.size; j++) {
            const compare = safe.get(j);

            intersection(criteria, compare, i, j, maxWidth);
        }
    }

    return maxArea;
}

module.exports = MaxRectangleArea;