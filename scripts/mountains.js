"use strict";

window.onload = function () {
  const mountainsListDropDown = document.querySelector(
    "#mountainsListDropDown"
  );
  const mountainsButton = document.querySelector("#mountainsButton");
  const mountainsListInfoDisplay = document.querySelector(
    "#mountainsListInfoDisplay"
  );
  const mountainsPhotoDisplay = document.querySelector(
    "#mountainsPhotoDisplay"
  );

  function loadMountains() {
    for (const mountain of mountainsArray) {
      const option = document.createElement("option");
      option.innerText = mountain.name;
      option.value = mountain.name;
      mountainsListDropDown.appendChild(option);
    }
  }

  function loadMountainsDisplay() {
    const selectedMountainName = mountainsListDropDown.value;

    // Clear previous display
    mountainsListInfoDisplay.innerHTML = "";
    mountainsPhotoDisplay.innerHTML = "";

    // Find the selected mountain
    const selectedMountain = mountainsArray.find(
      (mountain) => mountain.name === selectedMountainName
    );

    if (selectedMountain) {
      // Create image element
      const imgElement = document.createElement("img");
      imgElement.src = `images/${selectedMountain.img}`; // Corrected here
      imgElement.alt = selectedMountain.name; // Corrected here

      // Create description element
      const descElement = document.createElement("p");
      descElement.innerText = selectedMountain.desc;

      // Append elements to the display div
      mountainsPhotoDisplay.appendChild(imgElement);
      mountainsListInfoDisplay.appendChild(descElement);
    }
  }

  loadMountains();
  mountainsButton.onclick = loadMountainsDisplay;
};
