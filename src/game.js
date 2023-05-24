class Game {
  constructor (board, ui) {
    this.board = board
    this.ui = ui
    this.xNext = true
    this.moveCount = 0
  }

  game = () => {

  }

  whoseTurnIsIt = () => {
    if (this.xNext) {
      return this.board.cp.x
    } else {
      return this.board.cp.o
    }
  }

  swapTurns = () => {
    this.xNext = !this.xNext
  }

  run = () => {
    while (this.moveCount < 9) {
      this.board.show()
      const row = this.ui.askInput('row')
      const column = this.ui.askInput('column')
      this.board.mark([row, column], this.whoseTurnIsIt())
      if (this.board.checkWins()) {
        this.board.show()
        this.ui.victoryMessage(this.xNext)
        return
      } else {
        this.swapTurns()
        this.moveCount += 1
      }
    }
    console.log('It is a draw!')
  }
}

module.exports = Game