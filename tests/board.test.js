const Board = require('../src/board')

describe('board class', () => {
  test('it initializes with an empty matrix', () => {
    const newBoard = new Board()
    expect(newBoard.board).toEqual([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ])
  })
})
