import ChessPiece from './piece.js';

class Knight extends ChessPiece {
    constructor(color, currentPosition) {
      super(color, currentPosition);
      this.symbol = color === 'white' ? '\u2658' : '\u265E';
    }
  
    isValidMove(newPosition) {
      const [newRow, newCol] = newPosition;
      const [currentRow, currentCol] = this.currentPosition;
  
      // A knight can move two squares in one direction and one square in the other
      const rowDiff = Math.abs(newRow - currentRow);
      const colDiff = Math.abs(newCol - currentCol);
  
      if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) {
        return true;
      }
  
      // If none of the above conditions are met, the move is not valid
      return false;
    }

}

export default Knight;