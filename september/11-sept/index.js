function storeLoginDetails() {
  var userId = "user1@gmail.com";
  var userPass = "lajsdlks@#88iuiusdf";

  return {
    isUserValid: function(newUserId) {
        console.log(userId, newUserId);
        return newUserId === userId;
    },
    getUserName: function() {
        return userId;
    }
  }

}

let userObj = storeLoginDetails();
console.log(userObj.isUserValid('user1@yopmail.com'));
console.log(userObj.getUserName());



function printName() {
  let name = "User 1";

  return function () {
    console.log("name -- ", name);
  };
}

var fun = printName();
console.log("test");
console.log("test");
console.log("test");

fun();
fun();

// console.log(myName);

// Higher order function

function processData(list = [], val1) {
  // list.map();
  val1();
}

function temp() {
  console.log("test");
}

processData(["user1", "user2"], temp);

function add(a, b) {
  return a + b;
}

function addPartial(a, b) {
  if (!b) {
    return function (c) {
      return a + c;
    };
  }
  return add(a, b);
}
