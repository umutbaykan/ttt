import logo from './logo.svg';
import './App.css';
import Mark from './components/mark/Mark'
const Game = require('./logic/game')
const Board = require('./logic/board')

const App = () => {

  const game = new Game(new Board())
  const [board, setBoard] = [game.board]

  return (
   <>
   <h1>OMGHAI</h1>
   {/* <Mark key={`${rowIndex}-${columnIndex}`} row={rowIndex} column={columnIndex} symbol={xNext ? 'X' : 'O'} callback={handleGridChange}/> */}
   <Mark row={1} column={1} symbol={'X'} callback={console.log('clicky clicky')}/>
    {console.log(board)}
   </>
  );
}

export default App;
