/* const */

// 1. can be declared and assigned ONLY once
//      aka it must be initialized at time of declaration
// 2. it is block scoped (scope?)

// Scope: "The scope of a variable is the region of a program where it can be accessed."

function scopeExample() {
  // SCOPE A; variables: x
  const x = "x";

  // the code block is denoted by { and }
  // this is what the "block" in "block scoped" refers to
  if (true) {
    // SCOPE B; variables: x, y
    const y = "y";

    // You can also make a code block by just inserting { and }
    {
      // SCOPE C; variables: x, y, and z
      const z = "z";
    }
  }
}

// In JavaScript, "each variable is accessible in it's direct scope and all scopes nested within that scope"














/* const */

// 1. can be declared and assigned ONLY once
//      (reasignment prohibited, mutations allowed)
//      (it must be initialized at time of declaration)
// 2. it is block scoped
// 3. use const when possible

// What will happen here?
function howToConst() {
  const username = 'Harold';

  if (true) {
    const username = 'Url';

    console.log(username);
  }

  console.log(username);
}

// howToConst();



















// What about here?
function howToConst2() {
  const username = 'Harold';

  if (true) {
    // const username = "John";
    console.log(username);
  }

  console.log(username);
}

// howToConst2();











// What about here?
function howToConst3() {
  if (true) {
    const username = 'Harold';
    console.log(username);
  }

  console.log(username);
}

// howToConst3();









/* let */
// 1. Can be declared only once, but reassignment is allowed
// 2. Block scoped

// What will happen here?
function howToLet() {
  let secret = "I'm secretly a cat.";

  if (true) {
    secret = "I'm secretly a banana";
    console.log(secret);
  }

  console.log(secret);
}
// howToLet();



// howToLet2();


// What about here?
function howToLet2() {
  let secret = "I'm secretly a cat.";

  if (true) {
    secret = "I'm secretly a banana";
    let secret = secret;
    console.log(secret);
  }

  console.log(secret);
}





























/* var */
// 1. Function-scoped
// 2. AVOID USING THIS, use let and const

// What happens here?
function howToVar() {
  var username = 'Harold';

  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
}

// howToVar();














// What about here?
function howToVar2() {
  var age = 10;
  if (true) {
    var username = 'Url';

    console.log(username);
  }

  console.log(username);
  return {
    sayHello: function() {
      var username = "Toby";
      console.log(username);
      console.log(age);
    },
    sayBye: function() {
      console.log(username);
    }
  };  
}

// howToVar2();
