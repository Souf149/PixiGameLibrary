import { Sprite } from "pixi.js";
import { Game_chess } from "../game_chess";
import { Piece } from "./chess_piece";

export default class Tower extends Piece{

    sprite: Sprite;
    
    public constructor(_game:Game_chess, _isWhite:boolean, _position:number[]){
        super(_game.container, _position, _isWhite);

        this.sprite = _game.sprite_factory.getTower(_isWhite);
        this.sprite.position.set(_game.GRID_SIZE * this.position[0], _game.GRID_SIZE * this.position[1])
        this.sprite.width = _game.GRID_SIZE;
        this.sprite.height = _game.GRID_SIZE;
        _game.container.addChild(this.sprite);
        
    }
}   