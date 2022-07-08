const input = document.querySelector("#searchInput");
const formSearch = document.getElementById("formSearch");
// Declaring var "url" to contain the API's url
const url = "https://jsonplaceholder.typicode.com/users";

window.addEventListener("load", function () {
  formSearch.reset();
  document.getElementById("searchInput").focus();
  // document.getElementById("radioByName").checked = true; // Setting the radio button "By Name" as default
  usersList();
});

// Function to get the users from the API
const usersList = async () => {
  // Declaring function "listUsers" to fetch the API's data
  const response = await fetch(url); // Declaring "response" which contains the API's data fetching
  const users = await response.json(); // Declaring "users" to contain the API's data response
  displayUsers(users); // Calling the function "displayUsers" to display the API's data
};

// Function to display the users
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
