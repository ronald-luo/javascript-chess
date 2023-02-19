import ChessPiece from './piece.js';

class Queen extends ChessPiece {
    constructor(color, currentPosition) {
      super(color, currentPosition);
      this.symbol = color === 'white' ? '\u2655' : '\u265B';
    }
  
    isValidMove(newPosition) {
      const [newRow, newCol] = newPosition;
      const [currentRow, currentCol] = this.currentPosition;
  
      // A queen can move like a rook or a bishop
      const rowDiff = Math.abs(newRow - currentRow);
      const colDiff = Math.abs(newCol - currentCol);
  
      // Check for rook-like moves
      if (newRow === currentRow || newCol === currentCol) {
        return true;
      }
  
      // Check for bishop-like moves
      if (rowDiff === colDiff) {
        return true;
      }
  
      // If none of the above conditions are met, the move is not valid
      return false;
    }

}
  
export default Queen;