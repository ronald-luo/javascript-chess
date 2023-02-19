import Pawn from './components/pawn.js';
import Rook from './components/rook.js';
import Knight from './components/knight.js';
import Bishop from './components/bishop.js';
import Queen from './components/queen.js';
import King from './components/king.js';
import Board from './components/board.js';

const board = new Board();
const boardEl = document.getElementById('board');
// Create the chess board
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const squareEl = document.createElement('div');
        squareEl.classList.add('square');
        squareEl.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
        boardEl.appendChild(squareEl);
    }
}

// Place the white pieces on the board
board.placePiece(new Rook('white', [0, 0]), [0, 0]);
board.placePiece(new Knight('white', [0, 1]), [0, 1]);
board.placePiece(new Bishop('white', [0, 2]), [0, 2]);
board.placePiece(new Queen('white', [0, 3]), [0, 3]);
board.placePiece(new King('white', [0, 4]), [0, 4]);
board.placePiece(new Bishop('white', [0, 5]), [0, 5]);
board.placePiece(new Knight('white', [0, 6]), [0, 6]);
board.placePiece(new Rook('white', [0, 7]), [0, 7]);
board.placePiece(new Pawn('white', [1, 0]), [1, 0]);
board.placePiece(new Pawn('white', [1, 1]), [1, 1]);
board.placePiece(new Pawn('white', [1, 2]), [1, 2]);
board.placePiece(new Pawn('white', [1, 3]), [1, 3]);
board.placePiece(new Pawn('white', [1, 4]), [1, 4]);
board.placePiece(new Pawn('white', [1, 5]), [1, 5]);
board.placePiece(new Pawn('white', [1, 6]), [1, 6]);
board.placePiece(new Pawn('white', [1, 7]), [1, 7]);

// Place the black pieces on the board
board.placePiece(new Rook('black', [7, 0]), [7, 0]);
board.placePiece(new Knight('black', [7, 1]), [7, 1]);
board.placePiece(new Bishop('black', [7, 2]), [7, 2]);
board.placePiece(new Queen('black', [7, 3]), [7, 3]);
board.placePiece(new King('black', [7, 4]), [7, 4]);
board.placePiece(new Bishop('black', [7, 5]), [7, 5]);
board.placePiece(new Knight('black', [7, 6]), [7, 6]);
board.placePiece(new Rook('black', [7, 7]), [7, 7]);
board.placePiece(new Pawn('black', [6, 0]), [6, 0]);
board.placePiece(new Pawn('black', [6, 1]), [6, 1]);
board.placePiece(new Pawn('black', [6, 2]), [6, 2]);
board.placePiece(new Pawn('black', [6, 3]), [6, 3]);
board.placePiece(new Pawn('black', [6, 4]), [6, 4]);
board.placePiece(new Pawn('black', [6, 5]), [6, 5]);
board.placePiece(new Pawn('black', [6, 6]), [6, 6]);
board.placePiece(new Pawn('black', [6, 7]), [6, 7]);

// Render the board
boardEl.innerHTML = board.toHTML();
let activeSquare = null;
let activePiece = [null, null];

const addEventListeners = () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', () => {
            // Clicked on the same square twice, so unhighlight it
            if (square.classList.contains('active')) {
            square.classList.remove('active');
            activeSquare = null;
            return;
            }

            // click on another square so unhighlight the previous one
            if (activeSquare) {
                activeSquare.classList.remove('active');
            }

            // Get row and col from square
            let row = square.getAttribute('row');
            let col = square.getAttribute('col');

            const piece = board.getPiece([row, col]);
            if (piece) {
                // Handle clicks on pieces
                activePiece = [row, col];
            } else {
                // Handle clicks on empty squares
                if (activePiece !== [null, null]) {
                    console.log(activePiece, [row, col])
                    // console.log(row,col)
                    board.movePiece(activePiece.map(val=> Number(val)), [Number(row), Number(col)]);

                    boardEl.innerHTML = board.toHTML();
                    addEventListeners();
                }
                activePiece = null;
                board.movePiece(row, col);
            }

            // Highlight clicked square
            square.classList.add('active');
            activeSquare = square;
        });
    });
};

addEventListeners();