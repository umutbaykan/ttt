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
    symbol = 'X'    
  } else {
    symbol = 'O'
  }

  useEffect(() => {
    checkWins()
  }, [grid])

  const handleGridChange = (gridKey, symbol) => {
    const newGrid = structuredClone(grid)
    newGrid[gridKey] = symbol
    setGrid(newGrid)
  }

  const checkWins = () => {
    
  }

  return (
    <>
    {grid.forEach((value, index) => {
       <div className="board-row">
          {value.forEach(() => {
            <Mark className='mark' gridKey={3} symbol={'X'} callback={handleGridChange}/>
          })}
       </div>
    })}
    
    <Mark gridKey={3} symbol={'X'} callback={handleGridChange}/>
    </>
    )
}

export default Board