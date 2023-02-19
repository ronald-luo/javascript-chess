class ChessPiece {
  constructor(color, currentPosition) {
    this.color = color;
    this.currentPosition = currentPosition;
  }

  isValidMove(newPosition) {
    // implement validation logic here
  }

  moveTo(newPosition) {
    if (this.isValidMove(newPosition)) {
      this.currentPosition = newPosition;
      return true;
    } else {
      return false;
    }
  }

  getSymbol() {
    return this.symbol;
  }
  
}

export default ChessPiece;