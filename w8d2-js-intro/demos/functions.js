/* Function Demo */


/* Named functions */

console.log(square(10)); // ?

function square(num) {
  return num * num;
}



























/* Function expresions */
// (Variable assigned functions / anonymous functions)
const feedMe = function(food) {
  return 'Thanks for the ' + food + ' !';
};





















/* Es6 Arrow function expression */
const feedMe2 = (food) => {
  return 'Thanks for the ' + food + ' !';
};

// Functionally same as above
// If numArgs === 1, no parens needed
// If function body === 1 line, no curlies, and implicit return
const feedMe3 = food => 'Thanks for the ' + food + ' !';

const arrow = (arrowArg1, arrowArg2, food) => {
  // function body

  console.log(arrowArg1(food));
  console.log(arrowArg2(food));
};















/* Constructor functions */

// Always name constructor functions starting with a capital letter
// This is a convention that makes things much easier!
function User(username, age) {
  // these are like @ (instance vars) in Ruby
  // these are properties for the user object we are creating
  // what is this?
  this.username = username;
  this.age = age;
  // this.sayHello = function() { console.log(`Hello ${this.username}`) }
}

// What about "instance" methods?
User.prototype.sayHello2 = function() {
  console.log(`Hello v2 ${this.username}`);
};

for (let i = 0; i++; length) {
  
}