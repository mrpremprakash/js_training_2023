// const sum = require("./index.js");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// const sayHello = require("./index.js");
// test("sayHello function should return 'Hello User1' given input 'User1'", function () {
//   expect(sayHello("User1")).toBe("Hello User1");
// });

const generateList = require("./index");

test("Check list of lis given users array", function () {
  expect(generateList(["user", "user", "user"])).toBe(
    "<li>user0</li><li>user1</li><li>user2</li>"
  );
});

test("Check list of lis given users array", function () {
  expect(generateList(["user"])).toBe("<li>user0</li>");
});
