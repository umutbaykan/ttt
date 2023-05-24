import { useState, useEffect } from 'react';
import Mark from '../mark/Mark'
import './Board.css'

const Board = ({ xNext, changeTurn, gameWon }) => {
  const [grid, setGrid] = useState([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ])
  
  let symbol;
  if (xNext) {
    symbol = 'X'    
  } else {
    symbol = 'O'
  }

  useEffect(() => {
    if (checkRowsForWin() || checkColumnsForWin() || checkDiagonalsForWin()) {
      gameWon()
    } 
  }, [grid])

  const handleGridChange = (row, column, symbol) => {
    const newGrid = structuredClone(grid)
    newGrid[row][column] = symbol
    setGrid(newGrid)
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
          <Mark key={`${rowIndex}-${columnIndex}`} row={rowIndex} column={columnIndex} symbol={symbol} callback={handleGridChange}/>
        ))}
      </div>
    ))}
    </>
    )
}

export default Board