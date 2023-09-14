// First query

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function minus(a, b) {
  return parseInt(a) - parseInt(b);
}

let computedFunction;
function handlePlusClick() {
  const initialValue = document.getElementById("input").value;
  document.getElementById("input").value = "";
  computedFunction = function (lastValue) {
    return add(initialValue, lastValue);
  };
}

function handleMinusClick() {
  const initialValue = document.getElementById("input").value;
  document.getElementById("input").value = "";
  computedFunction = function (lastValue) {
    return minus(initialValue, lastValue);
  };
}

function handleCalculateClick() {
  document.getElementById("input").value = computedFunction(
    document.getElementById("input").value
  );
}

function handleNumberClick(num) {
  document.getElementById("input").value += num;
}

// Make it work (1)(2) => 3
// Make it work (1)(2)(3) => 6
// Make it work (”sum”)(2)(4) => 6



// function composition
function printA(input) {
   console.log("A");
}
function printB(input) {
    console.log( "B");
}
function printC(input) {
    console.log( "C");
}
console.log("+++++++");
// printA();

// var tt = printA();
// var tt2 = printB();
// var tt3 = printC();
// console.log(tt + tt2 + tt3);
// // C
// // B
// // A

// console.log(tt3 + tt2 + tt);

function compose(fun1, fun2) {
  return function () {
    return fun2(fun1());
  };
}

const composedFun = compose(compose(printA, printB), printC);
console.log(composedFun());

const composedFun2 = compose(printC, compose(printB, printA));
console.log(composedFun2());

function add2(a) {
  return function (b) {
    if (b) {
      return add2(a + b);
    }
    return a;
  };
}

let callback;

for (var i = 1; i <= 10; i++) {
  if (callback) {
    callback = callback(i);
  } else {
    callback = add2(i);
  }
}

console.log(callback());




