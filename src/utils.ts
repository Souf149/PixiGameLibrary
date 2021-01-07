import * as PIXI from 'pixi.js';

// TODO: Remove constant values
export const GRID_SIZE = 42;
export const cols = 15;
export const rows = 12;
export const topMargin = 50;

const URL = "https://soufsnake-35c7.restdb.io/rest/snake-scores";
const API_KEY = '5fd74a4cff9d670638140565';

export const enum State {
    NONE = -1,
    HOME,
    LEADERBOARD,
    SNAKE,
    CHESS,
}
export const images = [
    "assets/chess_pieces.png",
    "assets/circle.png",
    "assets/arcade_bg.png",
    "assets/arrow.png",
    "assets/bg.png",
    "assets/food.png",
    "assets/leaderboard_bg.png",
    "assets/popup_bg.png",
    "assets/scoreboard.png",
    "assets/square.png",
    "assets/white_square.png",
    "assets/brown_square.png",
]

export function getSprite(app: PIXI.Application, name: string){
    const _path = "assets/" + name + ".png";
    return new PIXI.Sprite(app.loader.resources[_path].texture.clone());
}

// Random Adapter
export function RandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function NumberToCell(num: number) {
    return Math.floor(num / GRID_SIZE);
}

export async function GetScores(){
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'x-apikey': API_KEY,
            'cache-control': 'no-cache',
        } 
    });
    return response.json();
}

export async function AddScore(_name: string | null, _score: number){
    const data = { name: _name, score: _score };
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'x-apikey': API_KEY,
            'cache-control': 'no-cache',
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;

}

// Builder with methods to edit the most commonly used attributes
export class SpriteBuilder{
    sprite: PIXI.Sprite;
    app: PIXI.Application;

    public constructor( _app: PIXI.Application, _spriteName: string){
        this.sprite = getSprite(_app, _spriteName)
        this.app = _app;
    }

    SetX(x:number){
        this.sprite.x = x;
        return this;
    }
    
    SetY(y:number){
        this.sprite.y = y;
        return this;
    }

    SetPosition(x:number, y:number){
        this.SetX(x);
        this.SetY(y);
        return this;
    }

    SetWidth(w:number){
        this.sprite.width = w;
        return this;
    }

    SetHeight(h:number){
        this.sprite.height = h;
        return this;
    }

    SetSize(w:number, h:number){
        this.SetWidth(w);
        this.SetHeight(h);
        return this;
    }

    SetAnchor(x:number, y:number){
        this.sprite.anchor.set(x, y);
        return this;
    }

    SetAlpha(alpha:number){
        this.sprite.alpha = alpha;
        return this;
    }

    SetOnClick(_func: Function){
        this.sprite.interactive = true;
        this.sprite.on('mousedown', _func);
    }

    Build(){
        return this.sprite;
    }

}