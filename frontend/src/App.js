import { useEffect, useState } from "react";
import "./App.css";
import Mark from "./components/mark/Mark";
const Game = require("./logic/game");
const Board = require("./logic/board");
const game = new Game(new Board());

const App = () => {
  const [turn, setTurn] = useState(game.whoseTurnIsIt());
  const [gameOngoing, setGameOngoing] = useState(true);
  const [win, setWin] = useState(false);

  const mark = (row, column, symbol) => {
    game.board.mark([row, column], symbol);
    game.swapTurns();
    setTurn(game.whoseTurnIsIt());
  };

  const restartGame = () => {
    game.refresh();
    setGameOngoing(true);
    setWin(false);
    setTurn(game.whoseTurnIsIt());
  };

  const winner = () => {
    if (turn === 'X') {
      return "O";
    } else {
      return "X";
    }
  };

  useEffect(() => {
    if (game.board.checkWins()) {
      setGameOngoing(false);
      setWin(true);
    } else if (game.board.checkDraw()) {
      setGameOngoing(false);
    }
  }, [turn]);

  return (
    <>
      {gameOngoing ? (
        <>
          <h4>It is currently {turn} turn</h4>
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
      ) : win ? (
        <>
          <h2>{winner()} won!</h2>
          <button onClick={restartGame}>Replay?</button>
        </>
      ) : (
        <>
          <h2>A draw!</h2>
          <button onClick={restartGame}>Replay?</button>
        </>
      )}
    </>
  );
};

export default App;
