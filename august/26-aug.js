function deleteUser() {
    document.getElementById('user_0').remove();
}

let users = [
  {
    firstName: "User 1 first name",
    lastName: "User 1 last name",
  },
  {
    firstName: "User 2 first name",
    lastName: "User 2 last name",
  },
];
let trs = '';
for (let i = 0; i < users.length; i++) {
    trs = trs + '<tr id="user_'+ i +'"> <td>' + users[i].firstName + '</td> <td>' + users[i].lastName + '</td> <td><button>Edit</button> | <button onclick="deleteUser()">Delete</button></td> </tr>';

    
}

document.getElementById('user-list').innerHTML = trs;
console.log(trs);