Webpack setup

1. mkdir src and mkdir dist

2. put index.html into dist and put all js files in src

3. create an index.js in src (entry file)

4. npm init -y (creates our package.json)

5. npm install webpack webpack-cli

6. In package.json scripts key:

"scripts": {
    "start": "webpack --watch --mode=development"
  }

7. In index.html add:

<script src="main.js"></script>  (webpack will create the main.js bundle file for us)

8. npm start

Also: 

Nn javascript files:
export using export default ClassName;
import className from “./class"; 

In index.js (entry file):

require other js files
Ex:
const Game = require("./game")
const MovingObject = require("./moving_object")

Add things to the window using:
window.MovingObject - MovingObject;

*Always remember to remove info from the window after we are done testing them