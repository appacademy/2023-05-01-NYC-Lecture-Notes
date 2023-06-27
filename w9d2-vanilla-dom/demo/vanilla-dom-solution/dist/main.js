/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// //grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)\nconst groceries = document.querySelector(\".groceries\");\nconst groceryForm = document.querySelector(\".grocery-form\");\nconst recipeList = document.querySelector(\".recipe-list\");\nconst recipes = document.querySelector(\".recipes\");\n\n// //create variables to hold localStorage things\nconst lsItems = JSON.parse(localStorage.getItem('items')) || [];\nconst lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];\n\n// //---------------PHASE 1 DOM MANIPULATION DEMO-----------------//\n// //create event handler that adds to our grocery list\nconst addItem = (e) => {\n    // debugger;\n    e.preventDefault();\n    let input = document.querySelector(\"input[name='add-grocery']\");\n    // debugger;\n    let value = input.value;\n\n    const item = {value: value}\n\n    lsItems.push(item);\n    localStorage.setItem(\"items\", JSON.stringify(lsItems));\n\n    updateList();\n\n    groceryForm.reset();\n\n}\n\n// //create action to render grocery list items\nconst updateList = () => {\n    if (!groceries.hasChildNodes()) {\n        lsItems.map(item => {\n            let li = document.createElement('li');\n            li.innerText = item.value;\n            groceries.appendChild(li);\n        })\n    } else {\n        let li = document.createElement('li');\n        li.innerText = lsItems[lsItems.length - 1].value;\n        groceries.appendChild(li);\n    }\n}\n\n// //create event handler to cross out list items on click\nconst markAsDone = (e) => {\n    // debugger;\n    e.stopPropagation();\n    let ele = e.target;\n    ele.classList.toggle(\"done\");\n}\n\n\n\n\n\n\n// //---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//\n\n// //create event handler that adds to our recipes list\nconst addRecipe = (e) => {\n\n    let recipeText = e.target.innerText;\n\n    lsRecipes.push({ recipeText });\n    localStorage.setItem(\"recipes\", JSON.stringify(lsRecipes))\n\n    updateWeeklyRecipe();\n}\n\n// //create action to render our recipes list\nconst updateWeeklyRecipe = () => {\n\n    recipes.innerHTML = lsRecipes.map((recipe) => {\n        return `\n            <a href=\"\" class=\"recipeText\">\n                ${recipe.recipeText}\n            </a>\n            `\n    });\n\n        \n// //ADD AN EVENT LISTENER to set window.location.hash\n    recipes.addEventListener('click', (e) => {\n        e.preventDefault();\n        let text = e.target.innerText;\n        debugger;\n        window.location.hash = text.trim();\n    })\n\n}\n\n// //---------------------------------------------------------------------//\n\n// //add event listener to on submit for form to process add item\ngroceryForm.addEventListener(\"submit\", addItem)\n// //add event listener to cross out a list item\ngroceries.addEventListener(\"click\", markAsDone);\n// //add event listener to to add recipe\nrecipeList.addEventListener(\"click\", addRecipe);\n\n// //call our methods to populate DOM\nupdateList();\nupdateWeeklyRecipe();\n\n// //--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//\n\n// let groc = document.querySelectorAll(\".groceries li\") //select the li's\n// groc.forEach((child) => {\n//     child.addEventListener(\"click\", markAsDone);\n// // })\n// const boo = (e) => {\n//     alert(\"Boo from the groceries ul! You didn't expect this, did you?!\")\n// }\n\n// groceries.addEventListener(\"click\", boo); //parent\n\n// //---------------------------------------------------------------------//\n\n\n\n//# sourceURL=webpack://vanilla-dom-solution/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;