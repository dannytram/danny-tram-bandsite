
let formEl = document.querySelector(".comment-section");
let postedCommentsEl = document.querySelector(".comment-list");
const API_URL = 'https://project-1-api.herokuapp.com';
const API_KEY = '12886366-d9c3-42eb-b9c9-f2ff4cc526f4';
let sortedDates = (comment) => comment.sort((a, b) => b.timestamp - a.timestamp);

let getComments = function (comments) {
    postedCommentsEl.innerHTML = ""
    sortedDates(comments)

    comments.forEach(function (comment) {

        let commentListEl = document.createElement("li");
        commentListEl.classList.add("comment-list__list");

        let commentIconEl = document.createElement("span");
        commentIconEl.classList.add("comment-list__icon");

        let commentNameEl = document.createElement("h2");
        commentNameEl.classList.add("comment-list__name");
        commentNameEl.innerText = comment.name;

        let commentDateEl = document.createElement("p");
        commentDateEl.classList.add("comment-list__date");
        commentDateEl.innerText = new Date(comment.timestamp).toLocaleDateString()

        let commentTextEl = document.createElement("p");
        commentTextEl.classList.add("comment-list__text");
        commentTextEl.innerText = comment.comment;

        commentListEl.appendChild(commentIconEl);
        commentListEl.appendChild(commentNameEl);
        commentListEl.appendChild(commentDateEl);
        commentListEl.appendChild(commentTextEl);
        postedCommentsEl.appendChild(commentListEl);
    })
};

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const namePost = event.target.name.value;
    const commentPost = event.target.comment.value;

    if (namePost && commentPost) {
        let pulledComment = {
            name: namePost,
            comment: commentPost
        }

        axios
            .post(`${API_URL}/comments/?api_key=" + ${API_KEY}`, pulledComment)
            .then(() => {
                displayComments()
            })
            .catch((error) => {
                console.log(error)
            })
        event.target.reset();
    } else {
        alert("Please Fill Out Required Fields");
    }
});

function displayComments() {
    axios
        .get(`${API_URL}/comments/?api_key=" + ${API_KEY}`)
        .then((response) => {
            commentsArray = response.data
            getComments(commentsArray)
        })
        .catch((error) => {
            console.log(error)
        })
}

displayComments();