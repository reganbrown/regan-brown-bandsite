// connect to the DOM to take input and output
const commentForm = document.querySelector(".comments__form");
const commentsSection = document.querySelector(".comments__list");
const submitButton = document.querySelector(".comments__button");

// default comment list
const commentsTable = [
  {
    name: "Isaac Tadesse",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "10/20/2023",
    pfp: "none",
  },
  {
    name: "Christina Cabre",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "10/28/2023",
    pfp: "none",
  },
  {
    name: "Victor Pinto",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "11/02/2023",
    pfp: "none",
  },
];

// function to print a comment to page
function printComment(index) {
  const photoBox = document.createElement("div");
  photoBox.className = "photo-box";
  commentsSection.appendChild(photoBox);

  const newPhoto = document.createElement("div");
  newPhoto.className = "photo-box__image";
  newPhoto.style.backgroundImage = commentsTable[index].pfp;
  photoBox.appendChild(newPhoto);

  const newCommentBox = document.createElement("div");
  newCommentBox.className = "comment-box";
  commentsSection.appendChild(newCommentBox);

  if (index === commentsTable.length - 1) {
    newCommentBox.classList.add("slide-in");
    photoBox.classList.add("slide-in");
  }

  const commentName = commentsTable[index].name;
  const newCommentName = document.createElement("p");
  newCommentName.innerText = commentName;
  newCommentName.className = "comment-box__name";
  newCommentBox.appendChild(newCommentName);

  const commentDate = commentsTable[index].date;
  const newCommentDate = document.createElement("p");
  newCommentDate.innerText = commentDate;
  newCommentDate.className = "comment-box__date";
  newCommentBox.appendChild(newCommentDate);

  const commentText = commentsTable[index].comment;
  const newCommentText = document.createElement("p");
  newCommentText.innerText = commentText;
  newCommentText.className = "comment-box__comment";
  newCommentBox.appendChild(newCommentText);
}

function renderComments() {
  // clear comments and rerender
  commentsSection.innerHTML = "";
  for (let i = commentsTable.length - 1; i >= 0; i--) {
    printComment(i);
  }
}

// print default comments on page load
renderComments();

// get current date and format
function getCurrentDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${month}/${day}/${year}`;
  return currentDate;
}

// function to add new comment to array when form submitted
function addNewComment(event) {
  event.preventDefault();
  const form = event.target;

  // get values from form
  const commentName = form.commenterName.value;
  const commentText = form.commenterComment.value;

  //create new object
  let newComment = {
    name: commentName,
    comment: commentText,
    date: getCurrentDate(),
    pfp: "url('./assets/images/Mohan-muruge.jpg')",
  };

  // push new object to array
  commentsTable.push(newComment);

  // clear and re-render comments to page
  renderComments();

  // clear form and reset errors
  commentForm.reset();
  commentForm.classList.remove("submitted");
}

// listen for form submission and call function
commentForm.addEventListener("submit", addNewComment);

// listen for form submission errors and style
submitButton.addEventListener("click", function () {
  commentForm.classList.add("submitted");
});
