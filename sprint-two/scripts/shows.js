// let showsArray = [
//     {
//         dates = "Mon Sept 06 2021",
//         venue = "Ronald Lane",
//         location = "San Francisco, CA",
//     },
//     {
//         dates = "Tue Sept 21 2021",
//         venue = "Pier 3 East",
//         location = "San Francisco, CA",
//     },
//     {
//         dates = "Fri Oct 15 2021",
//         venue = "View Lounge",
//         location = "San Francisco, CA",
//     },
//     {
//         dates = "Sat Nov 06 2021",
//         venue = "Hyatt Agency",
//         location = "San Francisco, CA",
//     },
//     {
//         dates = "Fri Nov 26 2021",
//         venue = "Moscow Center",
//         location = "San Francisco, CA",
//     },
//     {
//         dates = "Wed Dec 15 2021",
//         venue = "Press Club",
//         location = "San Francisco, CA",
//     },
// ]


let showsEl = document.createElement("h1");
showsEl.classList.add("shows_title");
showsEl.innerText = "Shows";

let mainEl = document.querySelector(".shows");
mainEl.appendChild(showsEl)