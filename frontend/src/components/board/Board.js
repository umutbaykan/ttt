import { useState, useEffect } from 'react';
import Mark from '../mark/Mark'
import './Board.css'

const Board = ({ xNext }) => {

  const [grid, setGrid] = useState([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ])
  
  let symbol;
  if (xNext) {
    symbol = 'x'    
  } else {
    symbol = 'o'
  }

  useEffect(() => {
    checkWins()
  }, [grid])

  const handleGridChange = (row, column, symbol) => {
    const newGrid = structuredClone(grid)
    newGrid[row][column] = symbol
    setGrid(newGrid)
  }

  const checkWins = () => {
    
  }

  return (
    <>
    {grid.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((item, columnIndex) => (
          <Mark key={`${rowIndex}-${columnIndex}`} row={rowIndex} column={columnIndex} symbol={'X'} callback={handleGridChange}/>
        ))}
      </div>
    ))}
    </>
    )
}

export default Board