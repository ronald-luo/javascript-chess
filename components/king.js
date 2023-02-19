import ChessPiece from './piece.js';

class King extends ChessPiece {
    constructor(color, currentPosition) {
      super(color, currentPosition);
      this.symbol = color === 'white' ? '\u2654' : '\u265A';
    }
  
    isValidMove(newPosition) {
      const [newRow, newCol] = newPosition;
      const [currentRow, currentCol] = this.currentPosition;
  
      // A king can move one square in any direction
      const rowDiff = Math.abs(newRow - currentRow);
      const colDiff = Math.abs(newCol - currentCol);
  
      if (rowDiff <= 1 && colDiff <= 1) {
        return true;
      }
  
      // If none of the above conditions are met, the move is not valid
      return false;
    }

}
  
export default King;