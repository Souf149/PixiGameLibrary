import { Application, Rectangle, Sprite } from "pixi.js";

// chess pieces spritesheet size    966 x 310 
// chess pieces sprite size         161 x 155

export class Chess_sprites_factory{
    app: Application;


    public constructor(_app: Application){
        this.app = _app;
    }
    
    getPiece(x: number, y: number){
        let texture = this.app.loader.resources["assets/chess_pieces.png"].texture;
        // Get the black or white king depending on the parameter
        texture.frame = new Rectangle(x * 161, y * 155, 161, 155);
    
        //Create the sprite from the texture
        return new Sprite(texture);
    }

    getKing(isWhite: boolean ){
        if(isWhite)
            return this.getPiece(0, 0);
        else
            return this.getPiece(0, 1); 
    }
    getQueen(isWhite: boolean ){
        if(isWhite)
            return this.getPiece(1, 0);
        else
            return this.getPiece(1, 1); 
    }
    getBishop(isWhite: boolean ){
        if(isWhite)
            return this.getPiece(2, 0);
        else
            return this.getPiece(2, 1); 
    }
    getKnight(isWhite: boolean ){
        if(isWhite)
            return this.getPiece(3, 0);
        else
            return this.getPiece(3, 1); 
    }
    getTower(isWhite: boolean ){
        if(isWhite)
            return this.getPiece(4, 0);
        else
            return this.getPiece(4, 1); 
    }
    getPawn(isWhite: boolean ){
        if(isWhite)
            return this.getPiece(5, 0);
        else
            return this.getPiece(5, 1); 
    }
    
}
