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
    while (true) {
      this.board.show()
      const row = this.ui.askInput('row')
      const column = this.ui.askInput('column')
      this.board.mark([row, column], this.whoseTurnIsIt())
      this.board.show()
      break
    }
  }
}

module.exports = Game