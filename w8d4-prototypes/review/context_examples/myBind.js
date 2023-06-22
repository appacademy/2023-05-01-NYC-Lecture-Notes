// ES6 myBind with no args and arrow syntax
Function.prototype.myBind = function (ctx) {
  // this;
  return () => {
    return this.apply(ctx);
  };
};

// ES5 myBind with no args and use of that variable closure to capture this context
Function.prototype.myBind = function (ctx, ...bindArg) {
  const originalFunc = this;
  return function(...callArg) {
    debugger;
    const returnedVal = originalFunc.apply(ctx, bindArg.concat(callArg));
    // const returnedVal = originalFunc.call(ctx, ...bindArg, ...callArg);
    return returnedVal;
  };
};

Function.prototype.myApply = function(ctx, args) {
  const copy = Object.create(ctx);
  copy.originalFunc = this;
  return copy.originalFunc(...args);
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow(person1, person2) {
    console.log(`${person1} owns ${this.name}`);
    console.log(`${person2} says hi!`);
    console.log(`${this.name} says meow!`);
    return "hello";
  }

  
}

const curie = new Cat("Curie");
const boundMeow = curie.meow.myBind(curie);
setTimeout(curie.meow, 5000);
setTimeout(function meow() {
  // console.log(`${person1} owns ${this.name}`);
  // console.log(`${person2} says hi!`);
  console.log(`${this.name} says meow!`);
}, 5000);
// setTimeout(curie.meow.myBind(curie), 1000);