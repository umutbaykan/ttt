import { useEffect, useState } from 'react';

import "./App.css";
import Mark from "./components/mark/Mark";
const Game = require("./logic/game");
const Board = require("./logic/board");
const game = new Game(new Board());

const App = () => {
  const [board, setBoard] = useState(game.board.board);
  const [turn, setTurn] = useState(game.whoseTurnIsIt())
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)
  const [draw, setDraw] = useState(false)
  
  const mark = (row, column, symbol) => {
    game.board.mark([row, column], symbol)
    game.swapTurns()
    setTurn(game.whoseTurnIsIt())
  }

  useEffect(() => {
    if (game.board.checkWins()) {
      setGameOver(true)
      setWin(true)
    } else if (game.board.checkDraw()) {
      setGameOver(true)
      setDraw(true)
    }
  }, [turn])

  return (
    <>
      <h1>OMGHAI</h1>
      {game.board.getBoard().map((row, rowIndex) => (
        <div className="container" key={rowIndex}>
          {row.map((_, columnIndex) => (
            <Mark
              key={`${rowIndex}-${columnIndex}`}
              row={rowIndex}
              column={columnIndex}
              symbol={turn}
              callback={mark}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default App;
