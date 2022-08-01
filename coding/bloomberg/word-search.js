 
const isOutOfBound = (board, row, col) => row < 0 || row >= board.length 
|| col < 0 || col >= board[0].length;
const checkNeighbors = (board, word, row, col) => {
    if (!word.length) return true;
    if (isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false;
    
    // Save some stuff
    const curChar = board[row][col];
    const newWord = word.substr(1);

    board[row][col] = 0; // Disable the current character
    //The reason is during backtracking we may run into cells that points to the current 
    //cell and the results will be wrong, in order to avoid that we disable the current cell
    
    // Check if neighbors are fruitful
    const results = checkNeighbors(board, newWord, row + 1, col) ||
        checkNeighbors(board, newWord, row - 1, col) ||
        checkNeighbors(board, newWord, row, col + 1) ||
        checkNeighbors(board, newWord, row, col - 1);

    // Enable current character
    board[row][col] = curChar;

    return results;
    // if(!word.length) return true;
    // if(isOutOfBounds(board, row, col) || board[row][col] !== word[0]) return false;
    // const currentCharacter = board[row][col];
    // const newWord = word.slice(0);
    // board[row][col] = 0;
    // const results = checkNeighbors(board, newWord, row - 1, col)
    // || checkNeighbors(board, newWord, row + 1, col)
    // || checkNeighbors(board, newWord, row, col - 1)
    // || checkNeighbors(board, newWord, row, col + 2);
    // board[row][col] = currentCharacter;
    // return results;
};


var exist = function(board, word) {    
    for (let row = 0; row < board.length; row++) {
        for (let col  = 0; col < board[0].length; col++) {
            if (checkNeighbors(board, word, row, col)) return true;
        }
    }
    return false;
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "ABCCED"
console.log(exist(board, word));