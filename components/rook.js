import ChessPiece from './piece.js';

class Rook extends ChessPiece {
    constructor(color, currentPosition) {
      super(color, currentPosition);
      this.symbol = color === 'white' ? '\u2656' : '\u265C';
    }
  
    isValidMove(newPosition) {
      const [newRow, newCol] = newPosition;
      const [currentRow, currentCol] = this.currentPosition;
  
      // A rook can only move in a straight line along a row or column
      if (newRow === currentRow || newCol === currentCol) {
        return true;
      }
  
      // If none of the above conditions are met, the move is not valid
      return false;
    }

}

export default Rook;