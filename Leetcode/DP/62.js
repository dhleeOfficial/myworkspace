var uniquePaths = function(m, n) {
    const d = Array.from(Array(m), () => new Array(n).fill(0));

    d[0][0] = 1;
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i > 0) d[i][j] += d[i - 1][j];
            if (j > 0) d[i][j] += d[i][j - 1];
        }
    }
    
    return d[m - 1][n - 1];
}