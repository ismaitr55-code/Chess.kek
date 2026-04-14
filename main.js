
import { GameLogic } from './core/game-logic.js';
import { createBoard } from './core/board-render.js';

const game = new GameLogic();
const board = createBoard(onDrop);

function onDrop(f,t){
 const move = game.makeMove(f,t);
 if(!move) return "snapback";
 console.log("move:", move);
}
