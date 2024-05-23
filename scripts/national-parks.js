"use strict";

window.onload = function () {
  //Calling IDs

  const parkTypeDropDown = document.querySelector("#parkTypeDropDown");
  

  //Creating Functions.

  //Loaction Functions
  function locationsOptions() {
    const parkLocationsDropDown = document.querySelector("#parkLocationsDropDown");

    for (const location of locationsArray) {
      const option = document.createElement("option");
      option.value = location;
      option.innerText = location;
      parkLocationsDropDown.appendChild(option);
    }
  }

  function locationsInfoDisplay() {
    const parkLocationsDropDownValue = document.querySelector("#parkLocationsDropDown").value;
    const peoplesInfoBody = document.querySelector("#peoplesInfoBody");

    // Clear previous results
    peoplesInfoBody.innerHTML = "";

    for (const park of nationalParksArray) {
      if (park.State === parkLocationsDropDownValue) {
        let row = peoplesInfoBody.insertRow();

        let cell1 = row.insertCell(0);
        cell1.innerText = park.LocationName;

        let cell2 = row.insertCell(1);
        cell2.innerText = park.Address;

        let cell3 = row.insertCell(2);
        cell3.innerText = park.City;

        let cell4 = row.insertCell(3);
        cell4.innerText = park.State;

        let cell5 = row.insertCell(4);
        cell5.innerText = park.ZipCode;

        let cell6 = row.insertCell(5);
        cell6.innerText = park.Phone;

        let cell7 = row.insertCell(6);
        cell7.innerText = park.Visit;
      }
    }
  }

  // Populate the types dropdown
  function typesOptions() {
    for (const parkType of parkTypesArray) {
      const option = document.createElement("option");
      option.value = parkType;
      option.innerText = parkType;
      parkTypeDropDown.appendChild(option);
    }
  }

  // Display filtered parks based on selected type
  function displayTypesOptions() {
    const typeDropDownResultsValue = document.querySelector("#parkTypeDropDown").value;
    const peoplesInfoBody = document.querySelector("#peoplesInfoBody");

    // Clear previous results
    peoplesInfoBody.innerHTML = "";

    // Filter parks based on the selected type
    const filteredParks = nationalParksArray.filter((park) => park.LocationName.includes(typeDropDownResultsValue));

    // Display filtered parks
    filteredParks.forEach((park) => {
      let row = peoplesInfoBody.insertRow();

      let cell1 = row.insertCell(0);
      cell1.innerText = park.LocationName;

      let cell2 = row.insertCell(1);
      cell2.innerText = park.Address;

      let cell3 = row.insertCell(2);
      cell3.innerText = park.City;

      let cell4 = row.insertCell(3);
      cell4.innerText = park.State;

      let cell5 = row.insertCell(4);
      cell5.innerText = park.ZipCode;

      let cell6 = row.insertCell(5);
      cell6.innerText = park.Phone;

      let cell7 = row.insertCell(6);
      cell7.innerText = park.Visit ;
    });
  }




  // Event listeners to call functions
  document.querySelector("#locationDropDownResults").onclick = locationsInfoDisplay;
  document.querySelector("#typeDropDownResults").onclick = displayTypesOptions;

  // Populate dropdowns
  locationsOptions();
  typesOptions();
};
