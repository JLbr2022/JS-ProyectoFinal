const input = document.querySelector("#searchInput");
// Declaring var "url" to contain the API's url
const url = "https://jsonplaceholder.typicode.com/users";

// Function to get the users from the API
const usersList = async () => {
  // Declaring function "listUsers" to fetch the API's data
  const response = await fetch(url); // Declaring "response" which contains the API's data fetching
  const users = await response.json(); // Declaring "users" to contain the API's data response
  displayUsers(users); // Calling the function "displayUsers" to display the API's data
};

function displayUsers(users) {
  let tableBody = ``;

  users.forEach((dataUser, index) => {
    tableBody += `<tr>
      <td>${dataUser.id}</td>
      <td>${dataUser.username}</td>
      <td>${dataUser.email}</td>
      <td>${dataUser.phone}</td>
    </tr>`;
  });

  document.getElementById("table-regs").innerHTML = tableBody;
}

// SEARCH FUNCTIONALITY
input.addEventListener("keyup", async (e) => {
  const response = await fetch(url); // Declaring "response" which contains the API's data fetching
  const users = await response.json(); // Declaring "users" to contain the API's data response

  let tableBody = ``;

  users.forEach((dataUser, index) => {
    if (
      dataUser.username.toLowerCase().includes(e.target.value.toLowerCase())
    ) {
      tableBody += `<tr>
        <td>${dataUser.id}</td>
        <td>${dataUser.username}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.phone}</td>
      </tr>`;
    }
  });
  document.getElementById("table-regs").innerHTML = tableBody;
});

window.addEventListener("load", function () {
  usersList();
});

// Search
// document.addEventListener("keyup", (e) => {
//   input.forEach((dataUser) => {
//     dataUser.textContent.toLowerCase().includes(e.target.value.toLowerCase())
//       ? (dataUser.style.display = "block")
//       : (dataUser.style.display = "none");
//   });
// });
