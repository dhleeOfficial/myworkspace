function solution(clothes) {
    const map = new Map();

    for (let v of clothes) {
        if (!map.has(v[1])) map.set(v[1], 1);
        else map.set(v[1], map.get(v[1]) + 1);
    }

    let answer = 1;

    for (let v of map.values()) {
        answer *= v + 1;
    }

    return answer - 1;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));