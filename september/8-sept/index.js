// function

function addNumbers() {
  console.log("addNumber function");
}

const addNumbers2 = function () {
  console.log("addNumbers2 function");
};

// arrow function

const add = (a, b) => {
  return a + b;
};

const temp = (a, b) => a + b;

// console.log(add(10, 20));
// addNumbers();
// addNumbers2();

let i = 10;

function printVal(value) {
  const newValue = ++value;
  console.log(newValue);
}

// printVal(i);
// console.log(i);

let users = ["User 1", "User 2"];

function printUsers(items) {
  //   const newCopy = Object.assign([], items);
  const newCopy = [...items];
  newCopy.push("User 3");
  console.log(newCopy);
}
printUsers(users);

function listItems(list) {
  console.log(list);
}

listItems(users);

// Higher order function
// Higher order component

function printName(callBack) {
  function innerFunction() {
    console.log("from within inner function");
    callBack();
  }
  return innerFunction;
}

const returnedValue = printName(function () {
  console.log("from within callback function");
});
returnedValue();

// function temp(callBack) {
//   return "test";
// }

// temp(function () {});
function temp1() {
  const a = 100;
  const b = 200;
  return a;
}

console.log(temp1());
console.log(b);

function partialAdd(a, b) {
  if (!b) {
    return function (c) {
      return a + c;
    };
  }
  return a + b;
}

console.log();

var t = partialAdd(10, 30);

console.log(t(20));