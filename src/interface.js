const prompt = require('prompt-sync')()

class Interface {
  static askInput = (line) => {
    const result = prompt(`Which ${line}?`)
    return result
  }
}

module.exports = Interface