// script.js

const board = document.getElementById('board');
const rows = 10;
const cols = 10;
const totalMines = 20;
let minePositions = [];

// Initialize board
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => handleCellClick(i, j));
        board.appendChild(button);
    }
}

// Randomly place mines
while (minePositions.length < totalMines) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * cols);
    const position = `${randomRow}-${randomCol}`;
    if (!minePositions.includes(position)) {
        minePositions.push(position);
    }
}

function handleCellClick(row, col) {
    const position = `${row}-${col}`;
    const cell = document.querySelector(`button:nth-child(${row * cols + col + 1})`);

    if (minePositions.includes(position)) {
        cell.classList.add('mine');
        alert('Mine hit! Game over.');
        window.location.reload();
    } else {
        const adjacentMines = getAdjacentMines(row, col);
        cell.innerText = adjacentMines;
    }
}

function getAdjacentMines(row, col) {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (i >= 0 && j >= 0 && i < rows && j < cols && minePositions.includes(`${i}-${j}`)) {
                count++;
            }
        }
    }
    return count;
}
