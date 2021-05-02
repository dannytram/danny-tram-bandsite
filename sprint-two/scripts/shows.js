let showsArray = [
  {
    dates: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    dates: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    dates: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    dates: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    dates: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    dates: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

let showsTitleEl = document.createElement("h1");
showsTitleEl.classList.add("shows__title");
showsTitleEl.innerText = "Shows";

let mainEl = document.querySelector(".shows");
mainEl.appendChild(showsTitleEl);

let showDateListEl = document.createElement("ul");
showDateListEl.classList.add("shows__dates");
mainEl.appendChild(showDateListEl);

function appendShows(array, showDateListEl) {
  array.forEach(function (showsArray) {
    let showsListEl = document.createElement("li");
    showsListEl.classList.add("shows__list");

    let showsDateEl = document.createElement("p");
    showsDateEl.classList.add("shows__date");
    showsDateEl.innerText = showsArray.dates;

    let showsVenueEl = document.createElement("p");
    showsVenueEl.classList.add("shows__venue");
    showsVenueEl.innerText = showsArray.venue;

    let showsLocationEl = document.createElement("p");
    showsLocationEl.classList.add("shows__location");
    showsLocationEl.innerText = showsArray.location;

    let showsButtonEl = document.createElement("button");
    showsButtonEl.classList.add("shows__button");
    showsButtonEl.innerText = "BUY TICKETS"

    showsListEl.appendChild(showsDateEl);
    showsListEl.appendChild(showsVenueEl);
    showsListEl.appendChild(showsLocationEl);
    showsListEl.appendChild(showsButtonEl);
    showDateListEl.appendChild(showsListEl);
  });
}

appendShows(showsArray, showDateListEl);

let locationBtn = document.querySelector(".shows__button");

locationBtn.addEventListener('click',(event) => {
  event.preventDefault();
  let showsLocationEl = document.querySelector(".shows__location");
  console.log(showsLocationEl.value);
});