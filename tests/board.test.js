const Board = require('../src/board')

describe('board class', () => {
  test('it initializes with an empty matrix', () => {
    const newBoard = new Board(' ')
    expect(newBoard.board).toEqual([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ])
  })

  test('can change the component symbol', () => {
    const newBoard = new Board(' ')
    newBoard.mark([0, 2], 'X')
    expect(newBoard.board).toEqual([
      [' ', ' ', 'X'],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ])
  })
})
