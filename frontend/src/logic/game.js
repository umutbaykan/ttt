class Game {
  constructor (board) {
    this.board = board
    this.xNext = true
  }

  whoseTurnIsIt = () => {
    if (this.xNext) {
      return 'X'
    } else {
      return 'O'
    }
  }

  swapTurns = () => {
    this.xNext = !this.xNext
  }
}

module.exports = Game
