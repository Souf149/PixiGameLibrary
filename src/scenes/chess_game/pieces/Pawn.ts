import { Game_chess } from "../game_chess";
import { Piece } from "./chess_piece";

export default class Pawn extends Piece{

    movedBefore: boolean = false;

    
    public constructor(_game:Game_chess, _isWhite:boolean, _position:number[]){
        super(_game, _position, _isWhite);

        this.sprite = _game.sprite_factory.getPawn(_isWhite);
        this.sprite.position.set(_game.GRID_SIZE * this.position[0], _game.GRID_SIZE * this.position[1])
        this.sprite.width = _game.GRID_SIZE;
        this.sprite.height = _game.GRID_SIZE;
        _game.container.addChild(this.sprite);
        
        this.sprite.interactive = true;
        this.sprite.on('mousedown', ()=> this.onClick());
        
    }

    CalculateMoves(){
        let available_moves = [];
        let dir = this.isWhite ? -1 : 1; // Direction the pawn moves, white goes north, black goes south
        
        // Check right above and then if all went good, check the square above it too
        let piece = this.game.CheckPosition([this.position[0], this.position[1] + dir]);
        if(!piece){
            available_moves.push([this.position[0], this.position[1] + dir])
            if(!this.movedBefore){
                let piece2 = this.game.CheckPosition([this.position[0], this.position[1] + dir*2]);
                if(!piece2){
                    available_moves.push([this.position[0], this.position[1] + dir*2])
                }
            }
        }

        // Diagonal attacks
        let lpiece = this.game.CheckPosition([this.position[0] - 1, this.position[1] + dir]);
        if(lpiece && lpiece.isWhite != this.isWhite)
            available_moves.push(lpiece.position);

        let rpiece = this.game.CheckPosition([this.position[0] + 1, this.position[1] + dir]);
        if(rpiece && rpiece.isWhite != this.isWhite)
            available_moves.push(rpiece.position);

        console.log(available_moves);
        this.game.ShowHighlights(available_moves);


    }
}   