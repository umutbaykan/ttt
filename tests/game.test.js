const Game = require('../src/game')
const Board = require('../src/board')
const UserInterface = require('../src/interface')

describe('game class', () => {
  let game
  const cp = { d: ' ', x: 'X', o: 'O' }

  beforeEach(() => {
    const board = new Board(cp)
    game = new Game(board, UserInterface)
  })

  test('initializes with default values', () => {
    expect(game.xNext).toEqual(true)
    expect(game.moveCount).toEqual(0)
  })

  describe('helper methods', () => {
    test('returns x if x is next', () => {
      expect(game.whoseTurnIsIt()).toEqual('X')
    })

    test('returns o if o is next', () => {
      game.xNext = false
      expect(game.whoseTurnIsIt()).toEqual('O')
    })

    test('swaps turns', () => {
      expect(game.xNext).toEqual(true)
      game.swapTurns()
      expect(game.xNext).toEqual(false)
    })
  })
})
