import { Container, Sprite } from 'pixi.js';



export abstract class Piece {
    container: Container;
    position: number[];
    isWhite: boolean;
    
    constructor(_container: Container, _position: number[], _isWhite: boolean) {
        this.container = _container;
        this.position = _position;
        this.isWhite = _isWhite;
    }
    Update(delta: number){
        
    }
    KeyPressed(key: string){
    
    }
}