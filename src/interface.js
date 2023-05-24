const prompt = require('prompt-sync')()

class UserInterface {
  static askInput = (line) => {
    const result = prompt(`Which ${line}? `)
    return result
  }

  static victoryMessage = (xTurn) => {
    if (xTurn) {
      console.log('X wins')
    } else {
      console.log('O Wins')
    }
  }

  static occuppied = () => {
    console.log('Cant place on existing mark')
  }
}

module.exports = UserInterface
