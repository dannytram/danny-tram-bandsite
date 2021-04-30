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
]

let showsTitleEl = document.createElement("h1");
showsTitleEl.classList.add("shows-title");
showsTitleEl.innerText = "Shows";

let mainEl = document.querySelector(".shows");
mainEl.appendChild(showsTitleEl)

let showDatesEl = document.createElement("ul");
showDatesEl.classList.add("shows__dates");

mainEl.appendChild(showDatesEl);

// let allShowsEl = document.querySelector(".shows__dates")

// let showsListEl = document.createElement("li")
// showsListEl.classList.add("shows__list")

// let showsDateEl = document.createElement("p")
// showsDateEl.classList.add("shows__date")
// showDatesEl.innerText = showsArray.dates

// let showsVenueEl = document.createElement("p")
// showsVenueEl.classList.add("shows__venue")
// showVenuesEl.innerText = showsArray.venue

// let showsLocationEl = document.createElement("p")
// showsLocationEl.classList.add("shows__location")
// showLocationsEl.innerText = showsArray.location

//button