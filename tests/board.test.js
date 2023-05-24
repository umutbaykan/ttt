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

  describe('checkColumnsForWin method', () => {
    test('returns true if all column elements are matching with x', () => {
      newBoard.board[0][0] = cp.x
      newBoard.board[1][0] = cp.x
      newBoard.board[2][0] = cp.x
      expect(newBoard.checkColumnsForWin()).toEqual(true)
    })

    test('returns true if all column elements are matching with o', () => {
      newBoard.board[0][2] = cp.o
      newBoard.board[1][2] = cp.o
      newBoard.board[2][2] = cp.o
      expect(newBoard.checkColumnsForWin()).toEqual(true)
    })

    test('returns false if column is in default state', () => {
      expect(newBoard.checkColumnsForWin()).toEqual(false)
    })
  })

  describe('checkDiagonalsForWin method', () => {
    test('returns true if diagonals are matching with x', () => {
      newBoard.board[0][0] = cp.x
      newBoard.board[1][1] = cp.x
      newBoard.board[2][2] = cp.x
      expect(newBoard.checkDiagonalsForWin()).toEqual(true)
    })

    test('returns true if diagonals are matching with o', () => {
      newBoard.board[2][0] = cp.o
      newBoard.board[1][1] = cp.o
      newBoard.board[0][2] = cp.o
      expect(newBoard.checkDiagonalsForWin()).toEqual(true)
    })

    test('returns false if diagonal is in default state', () => {
      expect(newBoard.checkDiagonalsForWin()).toEqual(false)
    })

    test('returns false if diagonals are occupied but not matching', () => {
      newBoard.board[2][0] = cp.o
      newBoard.board[1][1] = cp.o
      newBoard.board[0][2] = cp.x
      expect(newBoard.checkDiagonalsForWin()).toEqual(false)
    })
  })

  describe('checkWins method', () => {
    test('returns true with a full row match of x', () => {
      newBoard.board = [
        [cp.x, cp.o, cp.x],
        [cp.x, cp.x, cp.x],
        [cp.o, cp.x, cp.o]
      ]
      expect(newBoard.checkWins()).toEqual(true)
    })

    test('returns false with a full row of mismatches', () => {
      newBoard.board = [
        [cp.x, cp.x, cp.o],
        [cp.o, cp.x, cp.x],
        [cp.x, cp.o, cp.o]
      ]
      expect(newBoard.checkWins()).toEqual(false)
    })

    test('returns true with a full column match of o', () => {
      newBoard.board = [
        [cp.x, cp.x, cp.o],
        [cp.o, cp.x, cp.x],
        [cp.o, cp.x, cp.o]
      ]
      expect(newBoard.checkWins()).toEqual(true)
    })

    test('returns false with a diagonal mismatch with defaults in', () => {
      newBoard.board = [
        [cp.x, cp.x, cp.d],
        [cp.o, cp.x, cp.x],
        [cp.d, cp.d, cp.o]
      ]
      expect(newBoard.checkWins()).toEqual(false)
    })
  })
})
