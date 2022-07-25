const gameOfLife = (board) => {
    const deepCopy = (arr) => JSON.parse(JSON.stringify(arr));
    const alive = (row, col, maxRow, maxCol, board) => {
        if(row < 0 || col < 0 || row > maxRow || col > maxCol) {
            return false;
        }
        return board[row][col] === 1;
    }
    const countLiveNeighbors = (board, row, col) => {
        let count = 0;
        const maxRow = board.length;
        const maxCol = board[maxRow].length;
        if(alive(row - 1, col, maxRow, maxCol, board)){
            count++;
        }
        if(alive(row + 1, col, maxRow, maxCol, board)) {
            count++;
        }
        if(alive(row, col + 1, maxRow, maxCol, board)){
            count++;
        }
        if(alive(row, col - 1, maxRow, maxCol, board)){
            count++;
        }
        if(alive(row, col - 1, maxRow, maxCol, board)){
            count++;
        }
        if(alive(row - 1, col - 1, maxRow, maxCol, board)){
            count++;
        }
        if(alive(row - 1, col + 1, maxRow, maxCol, board)){
            count++;
        }
        if(alive(row + 1, col - 1, maxRow, maxCol, board)){
            count++;
        }
        if(alive(row + 1, col + 1, maxRow, maxCol, board)){
            count++;
        }
        return count;
    }
    const applyRules = (board, row , col) => {
        
    }
}