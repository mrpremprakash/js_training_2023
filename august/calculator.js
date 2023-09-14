const PLUS = "plus";
let firstValue, operationType;

function handleNumberClick(num) {
  console.log(num);
  const finalValue = document.getElementById("result").value + num;
  document.getElementById("result").value = finalValue;
}

function addBtnClickHandler(type) {
  firstValue = document.getElementById("result").value;
  operationType = type;
  console.log(firstValue, type);
  document.getElementById("result").value = "";
}

function showResult() {
  const secondValue = document.getElementById("result").value;
  console.log(typeof firstValue, operationType, secondValue);
  let calculatedValue = 0;
  if (operationType === PLUS) {
    calculatedValue = parseInt(firstValue) + parseInt(secondValue);
  }
  document.getElementById("result").value = calculatedValue;
}


handleNumberClick();