var climbStairs = function(n) {
    if (n === 1) return 1;
    
    const d = new Array(n + 1);
    
    d[0] = 1;
    d[1] = 1;
    
    for (let i = 2; i < d.length; ++i) {
        d[i] = d[i - 2] + d[i - 1];
    }
    
    return d[n];
};