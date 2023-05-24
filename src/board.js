class Board {
  constructor (cp) {
    this.board = [
      [cp, cp, cp],
      [cp, cp, cp],
      [cp, cp, cp]
    ]
  }

  mark = ([row, column], symbol) => {
    this.board[row][column] = symbol
  }
}

module.exports = Board
