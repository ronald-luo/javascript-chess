import ChessPiece from './piece.js';

class Pawn extends ChessPiece {
    constructor(color, currentPosition) {
      super(color, currentPosition);
      this.hasMoved = false;
      this.symbol = color === 'white' ? '\u2659' : '\u265F';
    }
  
    isValidMove(newPosition) {
      // console.log(newPosition)
      // console.log(this.currentPosition)
      const [newRow, newCol] = newPosition;
      const [currentRow, currentCol] = this.currentPosition;
  
      // Determine direction based on the color of the pawn
      const direction = this.color === 'white' ? 1 : -1;
  
      // If the pawn has not moved yet, it can move two squares forward
      if (!this.hasMoved && newRow === currentRow + 2 * direction && newCol === currentCol) {
        return true;
      }
  
      // Otherwise, the pawn can only move one square forward
      if (newRow === currentRow + direction && newCol === currentCol) {
        return true;
      }
  
      // Pawns can also capture diagonally
      if (newRow === currentRow + direction && Math.abs(newCol - currentCol) === 1) {
        return true;
      }
  
      // If none of the above conditions are met, the move is not valid
      return false;
    }

    // getViableMoves(board) {
    //   const [row, col] = this.position;
    //   const moves = [];
    //   const direction = this.color === "white" ? -1 : 1;
  
    //   // Check if the pawn can move one square forward
    //   if (board.isEmpty([row + direction, col])) {
    //     moves.push([row + direction, col]);
    //   }
  
    //   // Check if the pawn can move two squares forward from its starting position
    //   if (this.isAtStartingPosition() && board.isEmpty([row + direction, col]) && board.isEmpty([row + 2 * direction, col])) {
    //     moves.push([row + 2 * direction, col]);
    //   }
  
    //   // Check if the pawn can capture a piece diagonally
    //   if (col > 0 && board.getPieceColor([row + direction, col - 1]) !== this.color) {
    //     moves.push([row + direction, col - 1]);
    //   }
    //   if (col < Board.SIZE - 1 && board.getPieceColor([row + direction, col + 1]) !== this.color) {
    //     moves.push([row + direction, col + 1]);
    //   }

    //   return moves;
    // }
  
    moveTo(newPosition) {
      const success = super.moveTo(newPosition);
      if (success) {
        this.hasMoved = true;
      }
      return success;
    }

}

export default Pawn;