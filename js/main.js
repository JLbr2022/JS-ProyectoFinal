// Declaring constants

const input = document.querySelector("#searchInput");
const formSearch = document.getElementById("formSearch");
const url = "https://jsonplaceholder.typicode.com/users";

// Loading DOM
window.addEventListener("load", function () {
  formSearch.reset();
  document.getElementById("searchInput").focus();
  usersList();
});

// Function to fetch the API's data
const usersList = async () => {
  // Declaring function "listUsers" to fetch the API's data
  const response = await fetch(url); // Declaring "response" which contains the API's data fetching
  const users = await response.json(); // Declaring "users" to contain the API's data response
  displayUsers(users); // Calling the function "displayUsers" to display the API's data
};

// Function to display the users on a table bootstrap style
function displayUsers(users) {
  let tableBody = ``;

  users.forEach((dataUser) => {
    tableBody += `<tr>
      <td>${dataUser.id}</td>
      <td>${dataUser.username}</td>
      <td>${dataUser.email}</td>
      <td>${dataUser.phone}</td>
    </tr>`;
  });

  document.getElementById("table-regs").innerHTML = tableBody; // Displaying the API's data in the table
}

// SEARCH FUNCTIONALITY
input.addEventListener("keyup", async (e) => {
  const response = await fetch(url); // Declaring "response" which contains the API's data fetching
  const users = await response.json(); // Declaring "users" to contain the API's data response

  let tableBody = ``;

  users.forEach((dataUser) => {
    if (
      // dataUser.searchBy.toLowerCase().includes(e.target.value.toLowerCase())
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
