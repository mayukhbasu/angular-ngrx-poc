const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for(let r = 0; r < grid.length; r ++) {
        for(let c = 0; c < grid[0].length; c++) {
            if(explore(grid, r , c, visited)){
                count++;
            }
        }
    }
    return count;
    // const visited = new Set();
    // let count = 0;
    // for(let r = 0; r < grid.length; r++) {
    //     for(let c = 0; c < grid[0].length; c++) {
    //         if(explore(grid, r, c, visited)){
    //             count++;
    //         }
    //     }
    // }
    // return count;
}

const explore = (grid, r, c, visited) => {
    const rowBound = r >= 0 && r < grid.length;
    const colBound = c >= 0 && c < grid[0].length;
    if(!rowBound || !colBound) return false;
    if(grid[r][c] === 'W') return false;
    const pos = r + ',' + c;
    if(visited.has(pos)) return false;
    visited.add(pos);
    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r , c - 1, visited);
    explore(grid, r , c + 1, visited);
    return true;
    // const rowInbounds = r >= 0 && r < grid.length;
    // const colInbounds = c>=0 && c<grid[0].length;
    // if(!rowInbounds || !colInbounds) return false;
    // if(grid[r][c] === 'W') return false;
    // const pos = r + ','+c;
    // if(visited.has(pos)) return false;
    // visited.add(pos);
    // explore(grid, r-1, c, visited);
    // explore(grid, r+1, c, visited);
    // explore(grid, r, c - 1, visited);
    // explore(grid, r, c + 1, visited);
    // return true;
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  console.log(islandCount(grid))
  islandCount(grid); // -> 3