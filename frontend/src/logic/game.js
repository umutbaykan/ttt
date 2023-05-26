class Game {
  constructor (board) {
    this.board = board
    this.xNext = true
  }

  play = (row, column, symbol) => {
    this.board.mark([row, column], symbol)
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

  // run = () => {
  //   while (this.board.moveCount < 9) {
  //     this.board.show()
  //     while (true) {
  //       if (this.board.mark([row, column], this.whoseTurnIsIt())) {
  //         break
  //       } else {
  //         this.ui.occuppied()
  //       }
  //     }
  //     if (this.board.checkWins()) {
  //       this.board.show()
  //       this.ui.victoryMessage(this.xNext)
  //       return
  //     } else {
  //       this.swapTurns()
  //       this.moveCount += 1
  //     }
  //   }
  //   console.log('It is a draw!')
  // }
}

module.exports = Game
