const countPath = (grid, r = 0 ,c = 0, memo = {} ) => {
    const pos = r +',' + c;
    if(pos in memo) return memo[pos];
    if(r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;
    if(r === grid.length - 1 && c === grid[0].length - 1) return 1;
    const downCount = countPath(grid, r + 1, c)
    const rightCount = countPath(grid, r, c + 1);
    memo[pos] = downCount + rightCount;
    return downCount + rightCount;
}

const grid = [
    ["O", "O", "X"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ];

  console.log(countPath(grid));