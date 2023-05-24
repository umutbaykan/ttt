class Game {
  constructor (board, ui) {
    this.board = board
    this.ui = ui
    this.xNext = true
    this.gameGoingOn = true
    this.moveCount = 0
  }

  game = () => {

  }

  run = () => {
    while (this.gameGoingOn) {
      const row = this.ui.askInput('row')
      const column = this.ui.askInput('column')
      console.log(row, column)
      break
    }
  }
}

module.exports = Game