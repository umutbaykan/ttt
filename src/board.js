class Board {
  constructor (cp) {
    this.board = [
      [cp.d, cp.d, cp.d],
      [cp.d, cp.d, cp.d],
      [cp.d, cp.d, cp.d]
    ]
    this.cp = cp
  }

  mark = ([row, column], symbol) => {
    this.board[row][column] = symbol
  }

  checkWins = () => {
   
  }

  checkRowsForWin = () => {
    for (let i = 0; i <= 2; i++) {
      if (
        this.board[i][0] !== this.cp.d &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]) {
        return true
      }
    }
    return false
  }

  checkColumnsForWin = () => {
    for (let i = 0; i <= 2; i++) {
      if (
        this.board[0][i] !== this.cp.d &&
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i]) {
        return true
      }
    }
    return false
  }
}

module.exports = Board
