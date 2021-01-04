import { Sprite } from "pixi.js";
import { Game_chess } from "../game_chess";
import { Piece } from "./chess_piece";

export default class King extends Piece{

    
    public constructor(_game:Game_chess, _isWhite:boolean, _position:number[]){
        super(_game, _position, _isWhite);

        this.sprite = _game.sprite_factory.getKing(_isWhite);
        this.sprite.position.set(_game.GRID_SIZE * this.position[0], _game.GRID_SIZE * this.position[1])
        this.sprite.width = _game.GRID_SIZE;
        this.sprite.height = _game.GRID_SIZE;
        _game.container.addChild(this.sprite);

        this.sprite.interactive = true;
        this.sprite.on('mousedown', ()=> this.onClick());
        
    }

    CalculateMoves(){
        let p = this.position;
        let available_moves = [];
        let king_moves = [
            [p[0] - 1, p[1] - 1], [p[0], p[1] - 1], [p[0] + 1, p[1] - 1],
            [p[0] - 1, p[1]    ],                   [p[0] + 1, p[1]    ],
            [p[0] - 1, p[1] + 1], [p[0], p[1] + 1], [p[0] + 1, p[1] + 1]
        ];

        for(let move of king_moves){
            let piece = this.game.CheckPosition(move)
            if (move[0] >= 0 && move[0] < this.game.cols && move[1] >= 0 && move[1] < this.game.rows){ // Check if the position of the move is in bounds
               if(piece){
                   if(piece.isWhite != this.isWhite){
                       available_moves.push(move);
                   }
               }else{
                   available_moves.push(move);
               }
            }
        }
        
        console.log(available_moves);
        this.game.ShowHighlights(available_moves);

    }
}   