import { useState } from 'react';
import Mark from '../mark/Mark'
import './Board.css'

const Board = ({ xNext }) => {

  const [grid, setGrid] = useState([
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '
  ])
  
  let symbol;
  if (xNext) {
    symbol = 'X'    
  } else {
    symbol = 'O'
  }

  const handleGridChange = (gridKey, symbol) => {
    const newGrid = structuredClone(grid)
    newGrid[gridKey] = symbol
    setGrid(newGrid)
  }

  return (
    <>
    <Mark gridKey={0} symbol={'O'} callback={handleGridChange}/>
    <Mark gridKey={1} symbol={'X'} callback={handleGridChange}/>
    </>
    )
}

export default Board