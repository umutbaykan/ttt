const Board = require('./src/board')
const UserInterface = require('./src/interface')
const Game = require('./src/game')

const cp = { d: ' ', x: 'X', o: 'O' }
const gameBoard = new Board(cp)

const game = new Game(gameBoard, UserInterface)
game.run()
