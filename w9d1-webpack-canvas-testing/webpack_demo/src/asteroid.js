console.log('Hello from asteroid.js');
import MovingObject from "./moving_object";

export default class Asteroid extends MovingObject {
    constructor() {
        super();
    }
}

// export function hello() {

// }


// export function goodbye() {

// }

// export {hello, goodbye}; // ES6 for exporting multiple functions/classes/variables
// export default Asteroid; // ES6 for exporting a single class/function/variable
// export { Asteroid };


// module.exports = Asteroid; // ES5