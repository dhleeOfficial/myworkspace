// 대각선으로 지나갔을 때, 사용하지 못하는 사각형 갯수
// w + h - gcd(w, h);

function solution(w, h) {
    const gcd = () => {
        let _gcd = 1;

        for (let i = 2; i <= Math.min(w, h); ++i) {
            if (w % i === 0 && h % i === 0) {
                _gcd = i;
            }
        }

        return _gcd;
    }

    const gcdValue = gcd();

    return w * h - ( w + h - gcdValue );
}

console.log(solution(8, 12));