const bestBridge = (grid = [[]]) => {
  let mainIsland;
  for(let r = 0; r < grid.length; r ++) {
    for(let c = 0; c < grid[0].length; c++) {
      const possibleIsland = traverseIsland(grid, r, c, new Set());
      if(possibleIsland.size > 0) {
        mainIsland = possibleIsland;
        break;
      }
    }
  }
  const visited = new Set(mainIsland);
}
const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
console.log(bestBridge(grid))