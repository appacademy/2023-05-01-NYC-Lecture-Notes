// Ways to call a function:
//   ???

// 1.) Function-style
//      func(args)
//          just invoked as a function without explicit receiver
//          context: the global scope (global object in Node, window in browser)

// 2.) Method-style
//      object.func(args)
//      invoked on a receiver
//      functions that are properties of object are called methods in javascript

// 3.) Constructor-style
//      new Func(args)
//      for making an instance of a class
//      context: the new instance being created






function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log(`${this.name} says 'meow'`);
};

function Dog(name) {
  debugger
  this.name = name;
}

Dog.prototype.bark = function () {
  debugger
  console.log(`${this.name} says 'woof'.`);
};

Dog.prototype.sniff = function (otherThing) {
  debugger
  console.log(`${this.name} sniffs ${otherThing.name}`);
};

















// function timesDo(num, cb) {
//   for (let i = 0; i < num; i++) {
//     cb();
//   }
// }

// Cat.prototype.makeNamePrinter() {
//   // Return a function that, when invoked, will print the cat's name
// }
