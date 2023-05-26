import logo from "./logo.svg";
import { useEffect, useState } from 'react';

import "./App.css";
import Mark from "./components/mark/Mark";
const Game = require("./logic/game");
const Board = require("./logic/board");

const App = () => {
  const game = new Game(new Board());
  const [board, setBoard] = useState(game.board);
  
  const mark = (row, column, symbol) => {
    game.board.mark([row, column], symbol)
  }

  return (
    <>
      <h1>OMGHAI</h1>
      {board.getBoard().map((row, rowIndex) => (
        <div className="container" key={rowIndex}>
          {row.map((_, columnIndex) => (
            <Mark
              key={`${rowIndex}-${columnIndex}`}
              row={rowIndex}
              column={columnIndex}
              symbol={"X"}
              callback={mark}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default App;
