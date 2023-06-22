function boringAddThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

function addThreeNumbers(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num2;
    }
  }
}

const addThreeNumbers = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num2;
    }
  }
}

const addThreeNumbers = num1 => num2 => num3 => num1 + num2 + num3;

// continuousAdd
function continuousAdd() {
  const nums = [];
  return function _curriedAdd(num, stop = false) {
    nums.push(num);
    console.log(nums.reduce((acc, el) => acc + el, 0));
    if (stop) {
      return nums;
    } else {
      return _curriedAdd;
    }
  };
}


Function.prototype.makeCurry = function(numArgs) {
  const args = [];
  const originalFunc = this;

  return function _curried(arg) {
    args.push(arg);

    if (args.length >= numArgs) {
      return originalFunc.apply(null, args);
    } else {
      return _curried;
    }
  }
};





