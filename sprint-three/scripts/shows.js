const API_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "12886366-d9c3-42eb-b9c9-f2ff4cc526f4";


axios
  .get(`${API_URL}/showdates/?api_key=${API_KEY}`)
  .then((response) => {
    showsArray = response.data
    console.log(response.data)

    let showsTitleEl = document.createElement("h1");
    showsTitleEl.classList.add("shows__title");

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
        showsDateEl.innerText = showsArray.date;

        let showsVenueEl = document.createElement("p");
        showsVenueEl.classList.add("shows__venue");
        showsVenueEl.innerText = showsArray.place;

        let showsLocationEl = document.createElement("p");
        showsLocationEl.classList.add("shows__location");
        showsLocationEl.innerText = showsArray.location;

        let showsButtonEl = document.createElement("button");
        showsButtonEl.classList.add("shows__button");
        showsButtonEl.innerText = "BUY TICKETS"
        // showsButtonEl.addEventListener('click', (event) => {
        //   event.preventDefault();
        //   let showsVenue = document.querySelector(".shows__venue");
        //   console.log("hi");


          showsListEl.appendChild(showsDateEl);
          showsListEl.appendChild(showsVenueEl);
          showsListEl.appendChild(showsLocationEl);
          showsListEl.appendChild(showsButtonEl);
          showDateListEl.appendChild(showsListEl);
        });
    }

    appendShows(showsArray, showDateListEl);
  })
  .catch((error) => {
    console.log(error)
  })