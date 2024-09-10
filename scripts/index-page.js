const commentForm = document.querySelector(".comments__form");
const commentsSection = document.querySelector(".comments__list");
const submitButton = document.querySelector(".comments__button");

// comment constructor
class commentObject {
  constructor(name, comment) {
    this.name = name;
    this.comment = comment;
  }
}

// function to clear and display comments from API by newest date
async function displayComments() {
  commentsSection.innerHTML = "";
  try {
    const response = await bandSite.getComments();
    const commentTable = response.data;
    commentTable.sort((a, b) => {
      if (a.timestamp < b.timestamp) return 1;
      if (a.timestamp > b.timestamp) return -1;
      return 0;
    });

    commentTable.forEach((comment) => {
      printComment(comment);
    });
    addListeners();
  } catch (error) {
    console.error(error);
  }
}

displayComments();

// function to print a comment to page
function printComment(comment) {
  const photoBox = document.createElement("div");
  photoBox.className = "photo-box";
  commentsSection.appendChild(photoBox);

  const newPhoto = document.createElement("div");
  newPhoto.className = "photo-box__image";
  newPhoto.style.backgroundImage = "none";
  photoBox.appendChild(newPhoto);

  const newCommentBox = document.createElement("div");
  newCommentBox.className = "comment-box";
  commentsSection.appendChild(newCommentBox);

  const commentName = comment.name;
  const newCommentName = document.createElement("p");
  newCommentName.innerText = commentName;
  newCommentName.className = "comment-box__name";
  newCommentBox.appendChild(newCommentName);

  const commentDate = convertDate(comment.timestamp);
  const newCommentDate = document.createElement("p");
  newCommentDate.innerText = commentDate;
  newCommentDate.className = "comment-box__date";
  newCommentBox.appendChild(newCommentDate);

  const commentText = comment.comment;
  const newCommentText = document.createElement("p");
  newCommentText.innerText = commentText;
  newCommentText.className = "comment-box__comment";
  newCommentBox.appendChild(newCommentText);

  const newCommentID = document.createElement("button");
  newCommentID.innerText = "Delete";
  newCommentID.setAttribute("value", comment.id);
  newCommentID.className = "comment-box__delete";
  newCommentBox.appendChild(newCommentID);
}

function addNewComment(event) {
  event.preventDefault();
  const form = event.target;

  let newComment = new commentObject(
    form.commenterName.value,
    form.commenterComment.value
  );

  // push new object to API
  bandSite.postComments(newComment);

  commentForm.reset();
  commentForm.classList.remove("submitted");
}

commentForm.addEventListener("submit", addNewComment);

// listen for form submission errors and style
submitButton.addEventListener("click", function () {
  commentForm.classList.add("submitted");
});

function addListeners() {
  const deleteBox = document.querySelectorAll(".comment-box__delete");

  deleteBox.forEach((del) => {
    del.addEventListener("click", function () {
      bandSite.deleteComments(this.value.toString());
    });
  });
}
