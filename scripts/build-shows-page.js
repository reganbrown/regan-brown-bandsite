const showsSection = document.querySelector(".shows__list");

// default comment list
const showsTable = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 1 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function printShow(index) {
  const showBox = document.createElement("div");
  showBox.classList.add("shows__box");
  showsSection.appendChild(showBox);

  const newLabelDate = document.createElement("p");
  newLabelDate.innerText = "Date";
  newLabelDate.classList.add("shows__label");
  showBox.appendChild(newLabelDate);

  const showDate = showsTable[index].date;
  const newShowDate = document.createElement("p");
  newShowDate.innerText = showDate;
  newShowDate.classList.add("shows__date");
  showBox.appendChild(newShowDate);

  const newLabelVenue = document.createElement("p");
  newLabelVenue.innerText = "Venue";
  newLabelVenue.classList.add("shows__label");
  showBox.appendChild(newLabelVenue);

  const showVenue = showsTable[index].venue;
  const newShowVenue = document.createElement("p");
  newShowVenue.innerText = showVenue;
  newShowVenue.classList.add("shows__venue");
  showBox.appendChild(newShowVenue);

  const newLabelLocation = document.createElement("p");
  newLabelLocation.innerText = "Location";
  newLabelLocation.classList.add("shows__label");
  showBox.appendChild(newLabelLocation);

  const showLocation = showsTable[index].location;
  const newShowLocation = document.createElement("p");
  newShowLocation.innerText = showLocation;
  newShowLocation.classList.add("shows__location");
  showBox.appendChild(newShowLocation);

  const newButton = document.createElement("button");
  newButton.classList.add("shows__button");
  newButton.innerText = "Buy Tickets";
  showBox.appendChild(newButton);
}

function renderShows() {
  for (let i = 0; i <= showsTable.length - 1; i++) {
    printShow(i);
  }
}

renderShows();
