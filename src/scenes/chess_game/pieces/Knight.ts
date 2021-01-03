import { Sprite } from "pixi.js";
import { Game_chess } from "../game_chess";
import { Piece } from "./chess_piece";

export default class Knight extends Piece{

    
    public constructor(_game:Game_chess, _isWhite:boolean, _position:number[]){
        super(_game, _position, _isWhite);

        this.sprite = _game.sprite_factory.getKnight(_isWhite);
        this.sprite.position.set(_game.GRID_SIZE * this.position[0], _game.GRID_SIZE * this.position[1])
        this.sprite.width = _game.GRID_SIZE;
        this.sprite.height = _game.GRID_SIZE;
        _game.container.addChild(this.sprite);

        this.sprite.interactive = true;
        this.sprite.on('mousedown', ()=> this.onClick());

        
        
    }

    onClick(){
        this.game.selected_piece = this;
        console.log(this.position);
        console.log("I have been clicked");
        this.CalculateMoves();
    }

    CalculateMoves(){
        // Check all available moves
        let x = this.position[0];
        let y = this.position[1];

        let available_moves = [
            [x - 1, y + 2], [x + 1, y + 2], // North
            [x + 2, y - 1], [x + 2, y + 1], // East
            [x - 1, y - 2], [x + 1, y - 2], // South
            [x - 2, y - 1], [x - 2, y + 1]
         ]

         this.game.ShowHighlights(available_moves);
         console.log(available_moves)
    }
}   