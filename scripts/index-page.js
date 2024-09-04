// connect to the DOM to take input and output
const commentForm = document.querySelector(".comments__form");
const commentsSection = document.querySelector(".comments__list");

// default comment list
const commentsTable = [
  {
    name: "Victor Pinto",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "11/02/2023",
  },
  {
    name: "Christina Cabre",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "10/28/2023",
  },
  {
    name: "Isaac Tadesse",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "10/20/2023",
  },
];

// function to print comment to page
function renderComment(index) {
  const commentName = commentsTable[index].name;
  const newCommentName = document.createElement("p");
  newCommentName.innerText = commentName;
  commentsSection.appendChild(newCommentName);
  newCommentName.className = "comments__list-name";

  const commentDate = commentsTable[index].date;
  const newCommentDate = document.createElement("p");
  newCommentDate.innerText = commentDate;
  commentsSection.appendChild(newCommentDate);
  newCommentDate.className = "comments__list-date";

  const commentText = commentsTable[index].comment;
  const newCommentText = document.createElement("p");
  newCommentText.innerText = commentText;
  commentsSection.appendChild(newCommentText);
  newCommentText.className = "comments__list-comment";
}

// loop to print default comments to the page
for (i in commentsTable) {
  renderComment(i);
}

// get current date and format
function getCurrentDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${month}/${day}/${year}`;
  return currentDate;
}

// function to render new comment to page when form submitted
function renderNewComment(event) {
  event.preventDefault();

  const commentName = event.target.commenterName.value;
  const commentText = event.target.commenterComment.value;

  let newComment = {
    name: commentName,
    comment: commentText,
    date: getCurrentDate(),
  };

  commentsTable.push(newComment);

  const newCommentText = document.createElement("p");
  newCommentText.innerText = commentsTable[commentsTable.length - 1].comment;
  commentsSection.prepend(newCommentText);
  newCommentText.className = "comments__list-comment";

  const newCommentDate = document.createElement("p");
  newCommentDate.innerText = commentsTable[commentsTable.length - 1].date;
  commentsSection.prepend(newCommentDate);
  newCommentDate.className = "comments__list-date";

  const newCommentName = document.createElement("p");
  newCommentName.innerText = commentsTable[commentsTable.length - 1].name;
  commentsSection.prepend(newCommentName);
  newCommentName.className = "comments__list-name";
}

// listen for form submission and call function
commentForm.addEventListener("submit", renderNewComment);
