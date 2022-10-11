const isInbound = (grid, r , c) => {
    const rowInbound = 0 <= r && r < grid.length;
    const colInbound = 0 <= c && c < grid[0].length;
    return rowInbound && colInbound;
}

const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set();
    const pos = startRow + ',' + startCol;
    visited.add(pos);
    const queue = [[startRow, startCol, 0]];
    while(queue.length > 0) {
        const [row, col, distance] = queue.shift();
        if(grid[row][col] === "C") return distance;
        const deltas = [[0,1], [1, 0], [0, -1], [-1, 0]];
        for(const delta of deltas) {
            const [rowDelta, colDelta] = delta;
            const neighborRow = row + rowDelta;
            const neighborCol = col + colDelta;
            const neighborPos = neighborRow + ',' + neighborCol;
            if(isInbound(grid, neighborRow, neighborCol) && grid[neighborRow][neighborCol] !== 'X'
            && !visited.has(neighborPos)) {
                visited.add(neighborPos)
                queue.push([neighborRow, neighborCol, distance + 1]);
            }
        }
    }
    return -1;
}

const grid = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'C', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['C', 'O', 'O', 'O', 'O'],
  ];
  console.log(closestCarrot(grid, 1, 2));
  
  closestCarrot(grid, 1, 2); // -> 4