const loggedInUserId = "1212sdsd2323";

function add() {
  let userName = "Abc";

  function printName() {
    console.log("From Parent scope -- " + userName);
    console.log("From Root scope -- " + loggedInUserId);
  }
  printName();
}

add();

function addNumbers() {
  console.log("from addNumbers");
  const innerName = "test";
}

addNumbers();

function temp() {}
temp();

(function () {
  const innerName = "test";
//   console.log("test");

  function login() {
    console.log("1st login");
  }
  login();
})();

(function () {
  const innerName = "test";
//   console.log("test");

  function login() {
    console.log("2nd login");
  }
  login();
})();




// 10 + (20 - 30) * 40
