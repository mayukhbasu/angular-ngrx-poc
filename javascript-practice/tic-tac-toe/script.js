let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'x';

function makeMove(index) {
    if (board[index] === '' && !checkWin()) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].classList.add(currentPlayer);
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWin()) {
            setTimeout(() => {
                alert(currentPlayer + ' wins!');
                resetGame();
            }, 100);
        } else if (!board.includes('')) {
            setTimeout(() => {
                alert('Draw!');
                resetGame();
            }, 100);
        } else {
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        }
    }
}

function checkWin() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let combo of winCombos) {
      console.log(combo)
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] 
          && board[combo[1]] === board[combo[2]]) {
          
          
          return true;
        }
    }
    return false;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'x';
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.classList.remove('x', 'o');
        cell.innerText = '';
    }
}
