function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}. :3`;
};

Cat.prototype.meow = function () {
  return 'meow';
};

Cat.pet = function() {
  console.log('pet');
}

// TODO: Refactor to ES6 class syntax 

// class Cat {
//   constructor(name, owner) {
//     this.name = name;
//     this.owner = owner;
//   }

//   cuteStatement() {
//     return `${this.owner} loves ${this.name}. :3`;
//   };

//   meow() {
//     return 'meow';
//   };

//   static pet() {
//     console.log('pet');
//   };

// }

































// class Cat {

//   constructor(name, owner) {
//     this.name = name;
//     this.owner = owner;
//   }

//   cuteStatement() {
//     return `${this.name} loves ${this.owner}. :3`;
//   }

//   meow() {
//     return 'meow';
//   }

// }
