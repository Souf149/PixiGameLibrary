import { Sprite } from 'pixi.js';
import { Game_chess } from '../game_chess';



export abstract class Piece {
    game: Game_chess;
    position: number[];
    isWhite: boolean;
    sprite?: Sprite;
    type: PieceType
    
    constructor(_game: Game_chess, _position: number[], _isWhite: boolean) {
        this.game = _game;
        this.position = _position;
        this.isWhite = _isWhite;
        this.type = PieceType.None;
    }
    
    OnClick(){

    }

    CalculateMoves(){
        
    }
}

export enum PieceType
{
    None,
    King,
    Queen,
    Tower,
    Bishop,
    Knight,
    Pawn,
}