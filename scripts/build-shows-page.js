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
  showBox.className = "shows__box";
  showsSection.appendChild(showBox);

  const showDate = showsTable[index].date;
  const newShowDate = document.createElement("p");
  newShowDate.innerText = showDate;
  newShowDate.className = "shows__date";
  showBox.appendChild(newShowDate);

  const showVenue = showsTable[index].venue;
  const newShowVenue = document.createElement("p");
  newShowVenue.innerText = showVenue;
  newShowVenue.className = "shows__venue";
  showBox.appendChild(newShowVenue);

  const showLocation = showsTable[index].location;
  const newShowLocation = document.createElement("p");
  newShowLocation.innerText = showLocation;
  newShowLocation.className = "shows__location";
  showBox.appendChild(newShowLocation);
}

function renderShows() {
  // clear comments and rerender
  showsSection.innerHTML = "";
  for (let i = showsTable.length - 1; i >= 0; i--) {
    printShow(i);
  }
}

renderShows();
