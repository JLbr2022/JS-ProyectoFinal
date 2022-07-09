// Declaring constants

const input = document.querySelector("#searchInput");
const formSearch = document.getElementById("formSearch");
const url = "https://restcountries.com/v3.1/all";

// Loading DOM
window.addEventListener("load", function () {
  formSearch.reset();
  document.getElementById("searchInput").focus();
  countriesList();
});

// Function to fetch the API's data
const countriesList = async () => {
  // Declaring function "listUsers" to fetch the API's data
  const response = await fetch(url); // Declaring "response" which contains the API's data fetching
  const countries = await response.json(); // Declaring "countries" to contain the API's data response
  displayCountries(countries); // Calling the function "displayCountries" to display the API's data
};

// Function to display the countries on a table bootstrap style
function displayCountries(countries) {
  let tableBody = ``;

  countries.forEach((dataCountries) => {
    tableBody += `<tr>
      <td>${dataCountries.flag}</td>
      <td>${dataCountries.name.official}</td>
      <td>${dataCountries.population}</td>
      <td>${dataCountries.region}</td>
    </tr>`;
  });

  document.getElementById("table-regs").innerHTML = tableBody; // Displaying the API's data in the table
}

// SEARCH FUNCTIONALITY BY COUNTRY or REGION
input.addEventListener("keyup", async (e) => {
  const response = await fetch(url); // Declaring "response" which contains the API's data fetching
  const countries = await response.json(); // Declaring "countries" to contain the API's data response

  var vbtrCountry = document.querySelector(
    "input[name=btrRadio]:checked"
  ).value;

  if (vbtrCountry === "Country") {
    let tableBody = ``;

    countries.forEach((dataCountries) => {
      if (
        dataCountries.name.official
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        tableBody += `<tr>
        <td>${dataCountries.flag}</td>
        <td>${dataCountries.name.official}</td>
        <td>${dataCountries.population}</td>
        <td>${dataCountries.region}</td>
      </tr>`;
      }
    });
    document.getElementById("table-regs").innerHTML = tableBody;
  } else {
    let tableBody = ``;

    countries.forEach((dataCountries) => {
      if (
        dataCountries.region
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        tableBody += `<tr>
        <td>${dataCountries.flag}</td>
        <td>${dataCountries.name.official}</td>
        <td>${dataCountries.population}</td>
        <td>${dataCountries.region}</td>
      </tr>`;
      }
    });
    document.getElementById("table-regs").innerHTML = tableBody;
  }
});
