const prompt = require('prompt-sync')()

class UserInterface {
  static askInput = (line) => {
    const result = prompt(`Which ${line}?`)
    return result
  }
}

module.exports = UserInterface
