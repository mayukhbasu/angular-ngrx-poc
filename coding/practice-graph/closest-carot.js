const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set([startRow+','+startCol]);
    const queue = [[startRow, startCol, 0]];
    while(queue.length > 0) {
        const [row, col, distance] = queue.shift();
        if(grid[row][col] === 'C') return distance;
        const deltas = [[1,0], [-1, 0], [0, 1], [0, -1]];
        for(let delta of deltas) {
            const [rowDelta, colDelta] = delta;
            const neighbourRow = row + rowDelta;
            const neighborCol = col + colDelta;
            const rowInbounds = 0<= neighbourRow && neighbourRow < grid.length;
            const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
            const pos = neighbourRow+','+neighborCol;
            if(rowInbounds && colInbounds && grid[neighbourRow][neighborCol] !== 'X'
            && !visited.has(pos)){
                queue.push([neighbourRow, neighborCol, distance + 1]);
                visited.add(pos);
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