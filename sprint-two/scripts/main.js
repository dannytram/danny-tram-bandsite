let commentArray = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        comment:
            "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment:
            "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        comment:
            "I can't stop listening. Everytime I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough",
    },
];

let formEl = document.querySelector(".comment-section");
let postedCommentsEl = document.querySelector(".comment-list");

let sortedDates = (comment) => comment.sort((a, b) => b.date - a.date);
let today = new Date().toISOString().slice(0, 10)

function formatDate(inputDate) {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        var day = date.getDate().toString();
        var month = (date.getMonth() + 1).toString();

        return (month[1] ? month : '0' + month[0]) + '/' +
           (day[1] ? day : '0' + day[0]) + '/' + 
           date.getFullYear();
    }
}

let commentSaver = function (comments) {
    postedCommentsEl.innerHTML = "";
    sortedDates(comments);

    comments.forEach(function (commentArray) {
        
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
        postedCommentsEl.appendChild(commentListEl);
    })
};

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    const namePost = event.target.name.value;
    const commentPost = event.target.comment.value;
    if (namePost && commentPost) {
        commentArray.push({
            name: namePost,
            date: formatDate(today),
            comment: commentPost
        })
        commentSaver(commentArray)
        event.target.reset();
    } else {
        alert("Please Fill Out Required Fields");
    }
});

commentSaver(commentArray);