/*
    입력을 받기 위한 모듈 사용 코드
        - jest를 이용하여 코드를 테스트 하기 위해서는 주석 처리 부탁드립니다:)
        - 입력 받은 코드
*/
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

    for (let i = 0; i < line.length; ++i) {
        const alpha = line[i];

        alpha === 'A' ? roomA.push(i) : alpha === 'B' ? roomB.push(i) : roomC.push(i);
    }

    safe.set(row++, { A: roomA, B: roomB, C: roomC });
}).on('close', () => {
    if (safe.size <= 1) console.log(`Max Rectangle area is 0`);
    else {
        console.log(`Max Rectangle area is = ${MaxRectangleArea(safe)}`);
    }

    process.exit();
});
// 입력 받기 위한 코드 주석 끝


/*
    MaxRectangleArea(safe)
        - params
            - safe : Map
                - key : Number
                    - row
                    - enter키를 기준으로 key값을 설정
                - value : Object
                    - property : A or B or C
                    - property value : Array
                        - elements : property 값과 일치하는 index
                - ex) ABBCCA -> { 0 -> { A: [0, 5], B: [1, 2], C:[3, 4] }};
        - return
            - Number
            - 가장 넓은 직사각형의 넓이를 반환
        - inner function
            - makeMaxWidth
                - return
                    - map value의 배열들의 index 갯수
            - intersection(c1, c2, r1, r2)
                - params
                    - c1 : Object
                        - 기준이 되는 map의 value
                    - c2 : Object
                        - 비교 대상이 되는 map의 value
                    - r1 : Number
                        - 기준이 되는 map의 key
                    - r2 : Number
                        - 비교 대상이 되는 map의 key
                - return
                    - 없음
                - behavior
                    - 직사각형의 넓이를 구하고, maxArea 변수보다 큰 값이 나오면 maxArea 값 변경
            - compareArray(arr1, arr2)
                - params
                    - arr1, arr2 : Array
                        - map value Object의 property value
                - return
                    - Array
                    - 파라미터로 받은 배열 2개 요소의 교집합 배열
*/
const MaxRectangleArea = (safe) => {
    const makeMaxWidth = () => {
        let maxWidth = 0;
        const obj = safe.get(0);

        for (const p in obj) {
            maxWidth += obj[p].length;
        }

        return maxWidth;
    }

    const intersection = (c1, c2, r1, r2) => {
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

    let maxArea = 0;
    let maxWidth = makeMaxWidth();

    for (let i = 0; i < safe.size - 1; i++) {
        const criteria = safe.get(i);

        for (let j = i + 1; j < safe.size; j++) {
            const compare = safe.get(j);

            intersection(criteria, compare, i, j);
        }
    }

    return maxArea;
}

module.exports = MaxRectangleArea;