const getTotalIsles = function (grid) {


  // write your code here
    if (grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;
    
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') return;
        grid[r][c] = 'W';
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L') {
                islandCount++;
                dfs(r, c);
            }
        }
    }
    
    return islandCount;

};

module.exports = getTotalIsles;