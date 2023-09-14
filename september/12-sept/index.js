let specialUsers = ["User 1", "User 2"];
let currentUserName = "User 1";

function isSpecialUser(useName) {
  let output;
  if (specialUsers.includes(useName)) {
    debugger;
    output = "Special User";
  } else {
    output = "Not special";
  }
  return function () {
    return output;
  };
}

var isSpecial = isSpecialUser(currentUserName);
console.log(isSpecial());

var loggedInUserSpecial = isSpecial();
console.log(loggedInUserSpecial);

var loggedInUserSpecial1 = isSpecial();
console.log(loggedInUserSpecial1);

function canVote(age) {
  let canIVote;
  if (age >= 18) {
    canIVote = true;
  } else {
    canIVote = false;
  }
  function returnCaIVoteValue() {
    return canIVote;
  }
  return returnCaIVoteValue;
}

let output = canVote(20);
console.log(output());
