import {Application, Rectangle} from 'pixi.js'; 
import { Scene } from "~scenes/scene";
import { Chess_sprites_factory } from './chess_sprites';


export class Game_chess extends Scene {

    sprite_factory:Chess_sprites_factory;

    public constructor(_app: Application) {
        super(_app);
        this.sprite_factory = new Chess_sprites_factory(this.app);

        // Creating the textures from spritesheet
        this.container.addChild(this.sprite_factory.getPawn(false));



    }

    

    Update(delta: number){

    }

    KeyPressed(key: string){
        
    }

}