// function sayHello(userName) {
//     return "Hello " + userName;
// }
// module.exports = sayHello;

var names = ["user", "user", "user"];

function generateList(names) {
  let lis = "";
  for (var i = 0; i < names.length; i++) {
    lis = lis + `<li>${names[i]}${i}</li>`;
  }
  return lis;
}

// module.exports = generateList;

// const userList = generateList(names);
// <li>user0</li><li>user1</li><li>user2</li>



function printNum(num) {
  console.log(num);
  if (num <= 10) {
    setTimeout(() => {
      printNum(++num);
    }, 0);
    
  }
}

// printNum(1);
// printNum(1);
// printNum(2);
// printNum(3);

// setTimeout(() => {
//   printNum(10);
// }, 4000);


for(var i = 0; i<=10; i++) {
  ((val) => {
    setTimeout(() => {
      console.log(val);
    }, i * 1000);
  })(i);
}