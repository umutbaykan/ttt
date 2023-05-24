import { useState, useEffect } from 'react';
import Board from './components/board/Board'
import './App.css';

function App() {

  const [xNext, setxNext] = useState(true)
  const [gameOngoing, setGameOngoing] = useState(true)

  const whoseTurnIsIt = () => {
    if (xNext) {
      return 'X'    
    } else {
      return 'O'
    }
  }

  const changeTurn = () => {
    setxNext(!xNext)
  }

  const gameWon = () => {
    changeTurn()
    setGameOngoing(!gameOngoing)
  }

  const restartGame = () => {
    setGameOngoing(true)
    setxNext(true)
  }

  return (
    <>
    {gameOngoing ? 
      <>
      <h4>It is currently {whoseTurnIsIt()} turn</h4>
      <Board changeTurn={changeTurn} xNext={xNext} gameWon={gameWon}/> 
      </>
      :
      <>
      <h2>{whoseTurnIsIt()} won!</h2>
      <button onClick={restartGame}>Replay?</button>
      </>
    }
    </>
  );
}

export default App;
