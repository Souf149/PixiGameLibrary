import {Application, Sprite} from 'pixi.js'; 
import { Scene } from "~scenes/scene";
import { SpriteBuilder } from '~utils';
import { Chess_sprites_factory } from './chess_sprites';
import Bishop from './pieces/Bishop';
import { Piece, PieceType } from './pieces/chess_piece';
import King from './pieces/King';
import Knight from './pieces/Knight';
import Pawn from './pieces/Pawn';
import Queen from './pieces/Queen';
import Tower from './pieces/Tower';


export class Game_chess extends Scene {

    sprite_factory:Chess_sprites_factory;
    pieces: Piece[] = [];
    cols = 8;
    rows = 8;
    GRID_SIZE: number;

    pointers: Sprite[] = [];

    

    selected_piece: Piece | undefined = undefined;

    public constructor(_app: Application) {
        super(_app);
        this.sprite_factory = new Chess_sprites_factory(this.app);
        this.GRID_SIZE = _app.view.height / this.cols;

        this.CreateBoard();
        this.CreatePieces();

        
        this.pieces.push(new Queen(this, false, [4, 2]));
        this.pieces.push(new Queen(this, true, [4, 5]));
        this.pieces.push(new Queen(this, false, [3, 1]));

        
        this.pieces.push(new Tower(this, false, [5, 3]));
        this.pieces.push(new Tower(this, true, [4, 6]));

        
        this.pieces.push(new Bishop(this, false, [7, 3]));
        this.pieces.push(new Bishop(this, true, [1, 2]));
        
        this.pieces.push(new Knight(this, true, [2, 2]));


        let sprite = new SpriteBuilder(this.app, "scoreboard")
            .SetSize(this.app.view.width - this.cols * this.GRID_SIZE, this.app.view.height)
            .SetPosition(this.cols * this.GRID_SIZE, 0)
            .Build();
        this.container.addChild(sprite);
        

    }

    CheckPosition(position: number[]){
        for(let piece of this.pieces)
            if(piece.position[0] == position[0] && piece.position[1] == position[1])
                return piece
        return undefined;
    }

    

    CreateBoard(){
        let spritename: string;
        for (let i = 0; i < this.cols; i++) {
            if (i % 2)
                spritename = "white_square"
            else
                spritename = "brown_square"

            
            for (let j = 0; j < this.rows; j++) {
                spritename = (spritename == "brown_square") ? "white_square" : "brown_square"
                let sprite = new SpriteBuilder(this.app, spritename)
                    .SetSize(this.GRID_SIZE, this.GRID_SIZE)
                    .SetPosition(i * this.GRID_SIZE, j * this.GRID_SIZE)
                    .Build();
                this.container.addChild(sprite);
            }
        }

    }

    CreatePieces(){
        // // Creating the chess pieces
        // //// BLACK minors
        // this.pieces.push(new Tower(this, false, [0, 0]));
        // this.pieces.push(new Knight(this, false, [1, 0]));
        // this.pieces.push(new Bishop(this, false, [2, 0]));
        // this.pieces.push(new Queen(this, false, [3, 0]));
        // this.pieces.push(new King(this, false, [4, 0]));
        // this.pieces.push(new Bishop(this, false, [5, 0]));
        // this.pieces.push(new Knight(this, false, [6, 0]));
        // this.pieces.push(new Tower(this, false, [7, 0]));
        // // BLACK pawns
        // this.pieces.push(new Pawn(this, false, [0, 1]));
        // this.pieces.push(new Pawn(this, false, [1, 1]));
        // this.pieces.push(new Pawn(this, false, [2, 1]));
        // this.pieces.push(new Pawn(this, false, [3, 1]));
        // this.pieces.push(new Pawn(this, false, [4, 1]));
        // this.pieces.push(new Pawn(this, false, [5, 1]));
        // this.pieces.push(new Pawn(this, false, [6, 1]));
        // this.pieces.push(new Pawn(this, false, [7, 1]));

        // //// WHITE minors
        // this.pieces.push(new Tower(this, true, [0, 7]));
        // this.pieces.push(new Knight(this, true, [1, 7]));
        // this.pieces.push(new Bishop(this, true, [2, 7]));
        // this.pieces.push(new Queen(this, true, [3, 7]));
        // this.pieces.push(new King(this, true, [4, 7]));
        // this.pieces.push(new Bishop(this, true, [5, 7]));
        // this.pieces.push(new Knight(this, true, [6, 7]));
        // this.pieces.push(new Tower(this, true, [7, 7]));
        // // WHITE pawns
        // this.pieces.push(new Pawn(this, true, [0, 6]));
        // this.pieces.push(new Pawn(this, true, [1, 6]));
        // this.pieces.push(new Pawn(this, true, [2, 6]));
        // this.pieces.push(new Pawn(this, true, [3, 6]));
        // this.pieces.push(new Pawn(this, true, [4, 6]));
        // this.pieces.push(new Pawn(this, true, [5, 6]));
        // this.pieces.push(new Pawn(this, true, [6, 6]));
        // this.pieces.push(new Pawn(this, true, [7, 6]));
    }

    ShowHighlights(positions: any){
        this.RemoveHightlights();

        for(let p of positions){
            let sprite = new SpriteBuilder(this.app, "circle")
                .SetSize(this.GRID_SIZE/3, this.GRID_SIZE/3)
                .SetAnchor(0.5, 0.5)
                .SetPosition((p[0] + 0.5) * this.GRID_SIZE, (p[1] + 0.5) * this.GRID_SIZE)
                .Build();
            this.pointers.push(sprite);
            this.container.addChild(sprite);
        }
    }

    RemoveHightlights(){
        for(let pointer of this.pointers){
            this.container.removeChild(pointer);
        }
    }


    

}