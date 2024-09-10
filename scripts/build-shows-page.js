const showsSection = document.querySelector(".shows__list");

async function displayShows() {
  try {
    const response = await bandSite.getShows();
    const showsTable = response.data;

    showsTable.forEach((show) => {
      printShow(show);
      addListeners();
    });
  } catch (error) {
    console.error(error);
  }
}

displayShows();

function printShow(show) {
  const showBox = document.createElement("div");
  showBox.classList.add("shows__box");
  showsSection.appendChild(showBox);

  const newLabelDate = document.createElement("p");
  newLabelDate.innerText = "Date";
  newLabelDate.classList.add("shows__label");
  showBox.appendChild(newLabelDate);

  const showDate = convertDate(show.date);
  const newShowDate = document.createElement("p");
  newShowDate.innerText = showDate;
  newShowDate.classList.add("shows__date");
  showBox.appendChild(newShowDate);

  const newLabelVenue = document.createElement("p");
  newLabelVenue.innerText = "Venue";
  newLabelVenue.classList.add("shows__label");
  showBox.appendChild(newLabelVenue);

  const showVenue = show.place;
  const newShowVenue = document.createElement("p");
  newShowVenue.innerText = showVenue;
  newShowVenue.classList.add("shows__venue");
  showBox.appendChild(newShowVenue);

  const newLabelLocation = document.createElement("p");
  newLabelLocation.innerText = "Location";
  newLabelLocation.classList.add("shows__label");
  showBox.appendChild(newLabelLocation);

  const showLocation = show.location;
  const newShowLocation = document.createElement("p");
  newShowLocation.innerText = showLocation;
  newShowLocation.classList.add("shows__location");
  showBox.appendChild(newShowLocation);

  const newButton = document.createElement("button");
  newButton.classList.add("shows__button");
  newButton.innerText = "Buy Tickets";
  showBox.appendChild(newButton);
}

function addListeners() {
  const showtimeBox = document.querySelectorAll(".shows__box");
  showtimeBox.forEach((show) => {
    show.addEventListener("click", () => {
      showtimeBox.forEach((show) => {
        show.classList.remove("shows__box--selected");
      });
      show.classList.add("shows__box--selected");
    });
  });
}
