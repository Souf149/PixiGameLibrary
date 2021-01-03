// Modules
import {Application} from 'pixi.js'

// Locals
import { images, State } from '~utils';
import * as config from '~config'
import { Scene } from '~scenes/scene';
import { Home } from '~scenes/home/home';
import { Game_snake } from '~scenes/game_snake/game_snake';
import { Leaderboard } from '~scenes/leaderboard/leaderboard';
import { Game_chess } from '~scenes/chess_game/game_chess';

// Create the application instance and add it to the page
const app = new Application({
    width: config.WIDTH,
    height: config.HEIGHT,
    backgroundColor: 0xCC55CC,
});
document.body.appendChild(app.view);

// state and scene variable, keeps track of the current state
let state: State;
let scene: Scene;

// load all assets into the pixi Loader
// Load all the textures and after this run `setup`
app.loader.add(images)
    .load(setup);

function setup() {
    // start the application after the images have been loaded
    switchState(State.HOME);

    app.ticker.add(delta => gameLoop(delta))
}

function gameLoop(delta: number) {
    scene.Update(delta);

    if(scene.newState != State.NONE)
        switchState(scene.newState);
}

// Handles the switching of states
function switchState(arg: State){
    state = arg;
    // reset the stage and switch state by initializing a new scene
    while(app.stage.children[0]) app.stage.removeChildAt(0);
    switch(state){
        case State.HOME:
            scene = new Home(app);
        break;
        case State.SNAKE:
            scene = new Game_snake(app);
        break;
        case State.CHESS:
            scene = new Game_chess(app);
        break;
        case State.LEADERBOARD:
            scene = new Leaderboard(app);
        break;
    }
}


// EVENTS
window.onkeydown = function (e: KeyboardEvent) {
    var key = e.key;
    console.log("[KEYPRESSED]: ", key);
    scene.KeyPressed(key);
    
}
