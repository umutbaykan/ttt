class Game {
  constructor (board) {
    this.board = board
    this.xNext = true
    this.gameGoingOn = true
    this.moveCount = 0
  }

  game = () => {

  }

  run = () => {
    while (this.gameGoingOn) {
      this.board.mark()
    }
  }
}

module.exports = Game
