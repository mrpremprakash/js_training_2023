const generateRows = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
  const users = [
    {
      firstName: "Prem 1",
    },
  ];
  expect(generateRows(users)).toBe("<tr><td>Prem</td></tr>");
});
