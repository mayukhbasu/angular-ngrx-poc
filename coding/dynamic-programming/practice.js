const maxPathSum = (grid = [[]], r = 0, c = 0, memo = {}) => {
  if(r < 0 || c < 0 || r>= grid.length || c >= grid[0].length) return -Infinity;
  const pos = r + '.' + c;
  if(pos in memo) return memo[pos];
  if(r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
  const downsum = maxPathSum(grid, r + 1, c, memo);
  const rightsum = maxPathSum(grid, r, c + 1, memo);
  let result = grid[r][c] + Math.max(downsum, rightsum);
  memo[pos] = result;
  return result;
}

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];
console.log(maxPathSum(grid))