// setTimeout(function () {
//   console.log(1);
// }, 0);

// setTimeout(function () {
//   console.log(2);
// }, 1000);

// setTimeout(function () {
//   console.log(3);
// }, 2000);

// setTimeout(function () {
//   console.log(4);
// }, 3000);

// function delayPrint(i) {
//   setTimeout(function () {
//     console.log(i);
//   }, (i - 1) * 1000);
// }

// for (var i = 1; i <= 10; i++) {
//   delayPrint(i);
// }

// function getData(urls, callback) {
//   const commonHeaders = {
//     "Content-Type": "application/text",
//     "User-Token": "asdfasdfasdfasdf",
//   };
//   const fetchArr = urls.map((item) =>
//     fetch(item, {
//       headers: commonHeaders,
//     })
//   );
//   Promise.all(fetchArr).then((res) => {
//     const result = [];
//     res.map(async (item) => {
//       //   console.log(item);
//       const jsonData = await item.json();
//       // result.push(jsonData);
//       console.log(jsonData);
//     });
//     callback(result);
//   });
// }

// getData(
//   [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//   ],
//   function (response) {
//     // console.log(response);
//   }
// );

function addVal(a, b) {
  return a + b;
}
console.assert(addVal(10, 30) === 40, "test", { errorMsg: "Failed" });
