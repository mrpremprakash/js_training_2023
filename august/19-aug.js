function deleteItem(rowId) {
  const selection = confirm("Are you sure you want to delete this item?");
  if (selection) {
    document.getElementById(rowId).remove();
  }
}

function createList() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      let trs = "";
      res.forEach((item) => {
        trs =
          trs +
          `
            <tr id="row-${item.id}">
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>
                <a href="#" onclick="editItem()">Edit </a> |
                <button onclick="deleteItem('row-${item.id}')">Delete</button>
                </td>
            </tr>
            `;
      });
      const tbl = `
    <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Action</th>
        </thead>
        <tbody>
            ${trs}
        </tbody>
    </table>
    `;
      document.getElementById("table-container").innerHTML = tbl;
    });
}
