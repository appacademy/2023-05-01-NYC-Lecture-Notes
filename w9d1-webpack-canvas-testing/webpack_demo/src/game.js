console.log('Hello from game.js');
// const Asteroid = require('./asteroid'); //ES5 way of importing

// import { Asteroid } from "./asteroid";
import Asteroid from "./asteroid"; // ES6 imports if using export default
 
 export default class Game {
    constructor() {
        this.asteroid = new Asteroid();
        console.log('hello');
    }
 }