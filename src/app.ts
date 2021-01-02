import {Application} from 'pixi.js'
import * as config from './config'

// Create the application instance and add it to the page
const app = new Application({
  width: config.WIDTH,
  height: config.HEIGHT,
  backgroundColor: 0xCC55CC,
});
document.body.appendChild(app.view);