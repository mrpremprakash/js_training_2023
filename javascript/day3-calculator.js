var firstValue;
var secondValue;
function toggleValue(type, val) {
  if (!type) return document.getElementById("result").value;
  document.getElementById("result").value = val;
}

function handleNumberClick(element) {
  var result = toggleValue();
  var finalValue = result + element.innerHTML;
  toggleValue("set", finalValue);
}

function handlePlusClick() {
  firstValue = toggleValue();
  toggleValue("set", "");
}

function clearResult() {
  toggleValue("set", "");
}

function showResult() {
  secondValue = toggleValue();
  var newValue = parseInt(firstValue) + parseInt(secondValue);
  toggleValue("set", newValue);
  firstValue = "";
  secondValue = "";
}




function add(a, b) {
    if(typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    return 0;
}

console.log(add(10, 20));
console.log(add('100', 200));



