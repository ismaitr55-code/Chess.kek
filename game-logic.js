
export class GameLogic{
 constructor(){this.game=new Chess();}
 makeMove(f,t){return this.game.move({from:f,to:t,promotion:'q'});}
}
