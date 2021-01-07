import { Sprite } from 'pixi.js';
import { Game_chess } from '../game_chess';



export abstract class Piece {
    game: Game_chess;
    position: number[];
    isWhite: boolean;
    sprite?: Sprite;
    
    constructor(_game: Game_chess, _position: number[], _isWhite: boolean) {
        this.game = _game;
        this.position = _position;
        this.isWhite = _isWhite;
    }

    onClick(){
        this.CalculateMoves();
    }

    SendAvailableSpots(available_moves: number[][]){
        

        console.log(available_moves);
        this.game.ShowHighlights(this, available_moves);
    }

    Move(_position: number[]){
        if(this.sprite){
            this.position = _position;
            this.sprite.position.set(this.game.GRID_SIZE * this.position[0], this.game.GRID_SIZE * this.position[1])
        }
    }

    CalculateMoves(){
        
    }
}