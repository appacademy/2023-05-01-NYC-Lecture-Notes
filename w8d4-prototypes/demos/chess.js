function Board() {
  this.sentinel = null;
}

Board.prototype.init = function() {
  this.makeStartingGrid();
};

Board.prototype.makeStartingGrid = function() {
  this.rows = Array.from({length: 8}, function() {
      return Array.from({length: 8}, function() {
          return this.sentinel;
      });
  });
  ["white", "black"].forEach((color) => {
      this.fillBackRow(color);
  });
};

Board.prototype.fillBackRow = function(color) {
  const backPieces = [
      Knight, Knight, Knight, Knight, Knight, Knight, Knight, Knight
  ];
  const i = color === "white" ? 7 : 0;

  backPieces.forEach((PieceClass, j) => {
      new PieceClass(color, this, [i, j]);
  });
};

Board.prototype.addPiece = function(piece, pos) {
  this.placePiece(piece, pos);
};

Board.prototype.placePiece = function(piece, pos) {
  const [row, col] = pos;
  this.rows[row][col] = piece;
};

function Piece(color, board, pos) {
  this.color = color;
  this.board = board;
  this.pos = pos;
  board.addPiece(this, pos);
}

Piece.prototype.toS = function() {
  return ` ${this.symbol()} `;
};

Piece.prototype.isEmpty = function() {
  return false;
};

function Knight(color, board, pos) {
  Piece.call(this, color, board, pos);
}

Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;
Knight.prototype.symbol = function() {
  return '♞';
};