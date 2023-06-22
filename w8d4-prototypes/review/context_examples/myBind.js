// ES6 myBind with no args and arrow syntax
Function.prototype.myBind = function (ctx) {
  this;
  return () => this.apply(ctx);
};

// ES5 myBind with no args and use of that variable closure to capture this context
Function.prototype.myBind = function (ctx) {
  let that = this;

  return function() {
    return that.apply(ctx);
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow(person1, person2) {
    console.log(`${person1} owns ${this.name}`);
    console.log(`${person2} says hi!`);
    console.log(`${this.name} says meow!`);
  }

  
}

const curie = new Cat("Curie");
// setTimeout(curie.meow, 5000);
// setTimeout(curie.meow.myBind(curie), 1000);