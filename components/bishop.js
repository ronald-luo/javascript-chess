import ChessPiece from './piece.js';

class Bishop extends ChessPiece {
    constructor(color, currentPosition) {
      super(color, currentPosition);
      this.symbol = color === 'white' ? '\u2657' : '\u265D';
    }
  
    isValidMove(newPosition) {
      const [newRow, newCol] = newPosition;
      const [currentRow, currentCol] = this.currentPosition;
  
      // A bishop can only move diagonally
      const rowDiff = Math.abs(newRow - currentRow);
      const colDiff = Math.abs(newCol - currentCol);
  
      if (rowDiff === colDiff) {
        return true;
      }
  
      // If none of the above conditions are met, the move is not valid
      return false;
    }

}
  
export default Bishop;