const Board = require('../src/board')

describe('board class', () => {
  let newBoard
  const cp = { d: ' ', x: 'X', o: 'O' }

  beforeEach(() => {
    newBoard = new Board(cp)
  })

  test('it initializes with an empty matrix', () => {
    expect(newBoard.board).toEqual([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ])
  })

  test('can change the component symbol', () => {
    newBoard.mark([0, 2], cp.x)
    expect(newBoard.board).toEqual([
      [' ', ' ', 'X'],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ])
  })

  describe('checkRowsForWin method', () => {
    test('returns true if all row elements are matching with x', () => {
      newBoard.board[0] = [cp.x, cp.x, cp.x]
      expect(newBoard.checkRowsForWin()).toEqual(true)
    })

    test('returns true if all row elements are matching with o', () => {
      newBoard.board[2] = [cp.o, cp.o, cp.o]
      expect(newBoard.checkRowsForWin()).toEqual(true)
    })

    test('returns false if row is in default state', () => {
      expect(newBoard.checkRowsForWin()).toEqual(false)
    })
  })
})
