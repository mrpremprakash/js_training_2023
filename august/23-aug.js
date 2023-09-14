let userObj = {
  name: "User 1",
};

let arr = ["abc", "xyz", "user2"];

let usersList = [
  {
    id: 1,
    userName: "User 1",
    email: "user1",
  },
  {
    id: 2,
    userName: "User 2",
    email: "user2@gmail.com",
  },
];

let users = "";
for (let i = 0; i < usersList.length; i++) {
  console.log(usersList[i].userName);

  users =
    users +
    "<tr> <td>" +
    usersList[i].id +
    "</td> <td>" +
    usersList[i].userName +
    "</td> <td>" +
    usersList[i].email +
    "</td> </tr>";
}

document.getElementById('userList').innerHTML = users;
console.log(users);
