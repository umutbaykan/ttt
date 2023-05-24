import { useState, useEffect } from 'react';
import Mark from '../mark/Mark'
import './Board.css'

const Board = ({ xNext, changeTurn, gameWon, gameDraw }) => {
  
  const [movesMade, setMovesMade] = useState(0)
  const [grid, setGrid] = useState([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ])
  
  useEffect(() => {
    if (checkRowsForWin() || checkColumnsForWin() || checkDiagonalsForWin()) {
      gameWon()
    } else if (movesMade === 9) {
      gameDraw()
    }
  }, [grid])

  const handleGridChange = (row, column, symbol) => {
    const newGrid = structuredClone(grid)
    newGrid[row][column] = symbol
    setGrid(newGrid)
    setMovesMade(movesMade + 1)
    changeTurn()
  }

  const checkRowsForWin = () => {
    for (let i = 0; i <= 2; i++) {
      if (
        grid[i][0] !== ' ' &&
        grid[i][0] === grid[i][1] &&
        grid[i][1] === grid[i][2]) {
        return true
      }
    }
    return false
  }

  const checkColumnsForWin = () => {
    for (let i = 0; i <= 2; i++) {
      if (
        grid[0][i] !== ' ' &&
        grid[0][i] === grid[1][i] &&
        grid[1][i] === grid[2][i]) {
        return true
      }
    }
    return false
  }

  const checkDiagonalsForWin = () => {
    if ((
      grid[1][1] !== ' ' &&
      grid[1][1] === grid[0][0] &&
      grid[1][1] === grid[2][2]) ||
    (
      grid[1][1] !== ' ' &&
      grid[1][1] === grid[0][2] &&
      grid[1][1] === grid[2][0])
    ) {
      return true
    }
    return false
  }

  return (
    <>
    {grid.map((row, rowIndex) => (
      <div className='container' key={rowIndex}>
        {row.map((item, columnIndex) => (
          <Mark key={`${rowIndex}-${columnIndex}`} row={rowIndex} column={columnIndex} symbol={xNext ? 'X' : 'O'} callback={handleGridChange}/>
        ))}
      </div>
    ))}
    </>
    )
}

export default Board