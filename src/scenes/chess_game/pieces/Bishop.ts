import { Sprite } from "pixi.js";
import { Game_chess } from "../game_chess";
import { Piece } from "./chess_piece";

export default class Bishop extends Piece{

    
    public constructor(_game:Game_chess, _isWhite:boolean, _position:number[]){
        super(_game, _position, _isWhite);

        this.sprite = _game.sprite_factory.getBishop(_isWhite);
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
        let available_moves = []

        // North East
        let current_looking_tile = [this.position[0] + 1, this.position[1] - 1];
        if (this.position[0] < this.game.cols - 1 && this.position[1] > 0 ){ 
            while (current_looking_tile[0] < this.game.cols && current_looking_tile[1] >= 0) {
                let piece = this.game.CheckPosition(current_looking_tile);
                if(piece){
                    if(piece.isWhite != this.isWhite){
                        available_moves.push([...current_looking_tile])
                    }
                    break;
                }else{
                    available_moves.push([...current_looking_tile]);
                }
                current_looking_tile[0]++;
                current_looking_tile[1]--;
            }
        }

        // East South
        current_looking_tile = [this.position[0] + 1, this.position[1] + 1];
        if (this.position[0] < this.game.cols - 1 && this.position[1] < this.game.rows - 1 ){ 
            while (current_looking_tile[0] < this.game.cols && current_looking_tile[1] < this.game.rows) {
                let piece = this.game.CheckPosition(current_looking_tile);
                if(piece){
                    if(piece.isWhite != this.isWhite){
                        available_moves.push([...current_looking_tile])
                    }
                    break;
                }else{
                    available_moves.push([...current_looking_tile]);
                }
                current_looking_tile[0]++;
                current_looking_tile[1]++;
            }
        }

        // South West
        current_looking_tile = [this.position[0] - 1, this.position[1] + 1];
        if (this.position[0] > 0 && this.position[1] < this.game.rows - 1 ){ 
            while (current_looking_tile[0] >= 0 && current_looking_tile[1] < this.game.rows) {
                let piece = this.game.CheckPosition(current_looking_tile);
                if(piece){
                    if(piece.isWhite != this.isWhite){
                        available_moves.push([...current_looking_tile])
                    }
                    break;
                }else{
                    available_moves.push([...current_looking_tile]);
                }
                current_looking_tile[0]--;
                current_looking_tile[1]++;
            }
        }
        
        // West North
        current_looking_tile = [this.position[0] - 1, this.position[1] - 1];
        if (this.position[0] > 0 && this.position[1] > 0 ){ 
            while (current_looking_tile[0] >= 0 && current_looking_tile[1] >= 0) {
                let piece = this.game.CheckPosition(current_looking_tile);
                if(piece){
                    if(piece.isWhite != this.isWhite){
                        available_moves.push([...current_looking_tile])
                    }
                    break;
                }else{
                    available_moves.push([...current_looking_tile]);
                }
                current_looking_tile[0]--;
                current_looking_tile[1]--;
            }
        }

        this.game.ShowHighlights(available_moves);

        console.log(available_moves);
    }
}   