let board = ['', '', '','', '', '','', '', ''];
let currentPlayer = 'x';

const checkWin = () => {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for(let combo of winCombos) {
    if(board[combo[0]] && board[combo[0]] === board[combo[1]] 
      && board[combo[1]] === board[combo[2]]) {
        return true;
      }
  }
  return false;
}

const reset = () => {

}

const makeMove = (index) => {
  if(board[index] === '' && !checkWin()) {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].classList.add(currentPlayer);
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    if(checkWin()) {
      alert(currentPlayer + '  '+'wins');
      reset();
    } else if(!board.includes('')) {
      alert('Draw!!');
      reset();
    } else {
      currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
    }
  }
}