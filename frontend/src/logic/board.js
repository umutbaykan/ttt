class Board {
  constructor() {
    this.board = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
    this.moveCount = 0;
  }

  mark = ([row, column], symbol) => {
    if (this.isOccuppied(row, column)) {
      return false;
    } else {
      this.board[row][column] = symbol;
      this.moveCount += 1;
      return true;
    }
  };

  isOccuppied = (row, column) => {
    if (this.board[row][column] !== " ") {
      return true;
    } else {
      return false;
    }
  };

  show = () => {
    for (let i = 0; i <= 2; i++) {
      console.log(this.board[i]);
    }
  };

  board = () => {
    return this.board
  }

  checkDraw = () => {
    if (this.moveCount === 9) {
      return true;
    } else {
      return false;
    }
  };

  checkWins = () => {
    if (
      this.checkRowsForWin() ||
      this.checkColumnsForWin() ||
      this.checkDiagonalsForWin()
    ) {
      return true;
    }
    return false;
  };

  checkRowsForWin = () => {
    for (let i = 0; i <= 2; i++) {
      if (
        this.board[i][0] !== " " &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]
      ) {
        return true;
      }
    }
    return false;
  };

  checkColumnsForWin = () => {
    for (let i = 0; i <= 2; i++) {
      if (
        this.board[0][i] !== " " &&
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i]
      ) {
        return true;
      }
    }
    return false;
  };

  checkDiagonalsForWin = () => {
    if (
      (this.board[1][1] !== " " &&
        this.board[1][1] === this.board[0][0] &&
        this.board[1][1] === this.board[2][2]) ||
      (this.board[1][1] !== " " &&
        this.board[1][1] === this.board[0][2] &&
        this.board[1][1] === this.board[2][0])
    ) {
      return true;
    }
    return false;
  };
}

module.exports = Board;
