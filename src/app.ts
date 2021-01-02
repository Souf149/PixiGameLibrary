import {Application} from 'pixi.js'

// Create the application instance and add it to the page
const app = new Application({
  width: 800,
  height: 1200,
  backgroundColor: 0xCC55CC,
  
});
document.body.appendChild(app.view);