






function generateList(names) {
  let lis = "";
  for (var i = 0; i < names.length; i++) {
    lis = lis + ` <li>${names[i]}${i}</li>`;
  }
  return lis;
}

function showList(list) {
    document.getElementById('list').innerHTML = `<ul>${list}</ul>`;
}

var names = ["user"];
const userList = generateList(names);
showList(userList);
console.log(userList);













function generateRows(items) {
  let trs = "";
  for (let i = 0; i < items.length; i++) {
    trs = trs + `<tr><td>${items[i].firstName}</td></tr>`;
  }
  return trs;
}
// console.log(generateRows([
//     {firstName: 'User 1'}
// ]));
module.exports = generateRows;
