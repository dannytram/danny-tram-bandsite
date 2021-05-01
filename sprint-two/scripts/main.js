let commentArray = [
    {
        name: "Connor Walton",
        date: new Date("02/17/2021"),
        comment:
            "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emilie Beach",
        date: new Date("01/09/2021"),
        comment:
            "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Miles Acosta",
        date: new Date("12/20/2020"),
        comment:
            "I can't stop listening. Everytime I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough",
    },
];

const formEl = document.querySelector("form");
const postedCommentsEl = document.querySelector(".posted-comments");
const sortedDates = (comment) => comment.sort((a, b) => b.date - a.date);

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const namePost = event.target.name.value;
    const commentPost = event.targer.comment.value;

    if (namePost && commentPost) {
        commentArray.push({
            name: namePost,
            date: new Date(),
            comment: commentPost,
        });
    }
});

array.forEach(function (commentArray) {
    let commentListEl = document.createElement("li");
    commentListEl.classList.add("comment-list__list");

    let commentIconEl = document.createElement("span");
    commentIconEl.classList.add("comment-list__icon");

    let commentNameEl = document.createElement("h2");
    commentNameEl.classList.add("comment-list__name");
    commentNameEl.innerText = commentArray.name;

    let commentDateEl = document.createElement("p");
    commentDateEl.classList.add("comment-list__date");
    commentDateEl.innerText = commentArray.date;

    let commentTextEl = document.createElement("p");
    commentTextEl.classList.add("comment-list__text");
    commentTextEl.innerText = commentArray.comment;

    commentListEl.appendChild(commentIconEl);
    commentListEl.appendChild(commentNameEl);
    commentListEl.appendChild(commentDateEl);
    commentListEl.appendChild(commentTextEl);
    // showDateListEl.appendChild(showsListEl);
});

// https://flaviocopes.com/how-to-sort-array-by-date-javascript/

// <-------lab---------->

// const formEl = document.getElementById("form");

// formEl.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const passwordOne = event.target.password.value;
//   const passwordTwo = event.target.confirmPassword.value;
//   confirmPasswords(passwordOne, passwordTwo);
// });

// function confirmPasswords(passwordOne, passwordTwo) {
//   if (passwordOne !== passwordTwo) {
//     alert("Passwords don't match, try again.")
//     return;
//   } else {
//     console.log(`Welcome to the site! ${passwordOne} ${passwordTwo}`);
//   }
// }
