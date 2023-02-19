class Board {
    constructor() {
      // Initialize an 8x8 array of nulls to represent the board
      this.capturedPieces = [];
      this.turn = 'white';
      this.grid = Array.from({ length: 8 }, () => new Array(8).fill(null));
    }
  
    getPiece(position) {
      const [row, col] = position;
      return this.grid[row][col];
    }
  
    placePiece(piece, position) {
      const [row, col] = position;
      this.grid[row][col] = piece;
      piece.currentPosition = position;
    }
  
    removePiece(position) {
      if (!position || typeof position !== 'object') {
        return null;
      }
      const [ row, col ] = position;
      const piece = this.grid[row][col];
      this.grid[row][col] = null;
      // piece.currentPosition = null;
      return piece;
    }
  
    movePiece(fromPosition, toPosition) {
      const piece = this.removePiece(fromPosition);
      if (!piece) {
        return false;
      }
      if (this.getPiece(toPosition)) {
        // If there is already a piece at the target position, put the removed piece back
        this.placePiece(piece, fromPosition);
        return false;
      }
      const success = piece.moveTo(toPosition);
      if (success) {
        this.placePiece(piece, toPosition);
        this.turn = this.turn === 'white' ? 'black' : 'white';
      } else {
        this.placePiece(piece, fromPosition);
      }
      this.printBoard(); // Print the board after the move
      return success;
    }

    toHTML() {
      let html = '';
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const position = [row, col];
          const piece = this.getPiece(position);
          const squareClass = (row + col) % 2 === 0 ? 'white' : 'black';
          const pieceClass = piece ? piece.constructor.name.toLowerCase() : '';
          const pieceSymbol = piece ? piece.getSymbol() : '';
          html += `<div class="square ${squareClass} ${pieceClass}" row=${row} col=${col}>${pieceSymbol}</div>`;
        }
        html += '<br>';
      }

      return html;
    }

    handleSquareClick(event) {
      const square = event.target;
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
          }
          activePiece = null;
          board.movePiece(row, col);
      }

      // Highlight clicked square
      square.classList.add('active');
      activeSquare = square;
    }

    // getViableMoves(position) {
    //   const piece = this.getPiece(position);
    //   if (!piece) {
    //     return [];
    //   }
    //   return piece.getViableMoves();
    // }

    printBoard() {
      for (let row = 0; row < 8; row++) {
        let rowString = '';
        for (let col = 0; col < 8; col++) {
          const piece = this.grid[row][col];
          rowString += (piece ? piece.symbol : '-') + ' ';
        }
        console.log(rowString);
      }
    }
    
 }
  
export default Board;