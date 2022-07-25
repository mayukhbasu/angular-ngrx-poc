var candyCrush = function(board) {
    if(!board) return board;
    let done = true;
    for(let row = 0; row < board.length; row ++) {
        for(col = 0; col + 2 < board[0].length; col++) {
            const candy1 = Math.abs(board[row][col]) ;
            const candy2 = Math.abs(board[row][col + 1]);
            const candy3 = Math.abs(board[row][col + 2]);
            if(candy1 && candy1 === candy2 && candy2 === candy3) {
                board[row][col] = board[row][col + 1] = board[row][col + 2] = -candy1;
                done = false;
            }
        }
    }
    for(let col = 0; col < board[0].length; col ++) {
        for(let row = 0; row + 2 < board.length; row ++) {
            const candy1 = Math.abs(board[row][col]) ;
            const candy2 = Math.abs(board[row + 1][col]);
            const candy3 = Math.abs(board[row + 2][col]);
            if(candy1 && candy1 === candy2 && candy2 === candy3) {
                board[row][col] = board[row + 1][col] = board[row + 2][col] = -candy1;
                done = false;
            }
        }
    }
    if(!done) {
        for(let col = 0; col < board[0].length; col++) {
            let index = board.length - 1;
            for(row = board.length - 1; row >= 0; row --) {
                if(board[row][col] > 0) {
                    board[index][col] = board[row][col];
                    index --;
                }
            }
            while(index >= 0) {
                board[index--][col] = 0;
            }
        }
    }
    if(done) {
        return board;
    } else {
        return candyCrush(board);
    }
};

  const board = [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]];
  console.log(board);
  console.log(candyCrush(board));