const key = "cdf543a0-7c51-4a5d-9d37-c7bed647696a";

class bandSiteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }
  getComments = async () => {
    const commentsTable = await axios.get(
      `${this.baseURL}comments?api_key=${this.apiKey}`
    );
    return commentsTable;
  };
  postComment = async (newComment) => {
    await axios.post(
      `${this.baseURL}comments?api_key=${this.apiKey}`,
      newComment
    );

    displayComments();
  };
  deleteComment = async (ID) => {
    await axios.delete(`${this.baseURL}comments/${ID}?api_key=${this.apiKey}`);
    displayComments();
  };
  likeComment = async (ID) => {
    await axios.put(
      `${this.baseURL}comments/${ID}/like?api_key=${this.apiKey}`
    );
    displayComments();
  };
  getShows = async () => {
    const showsTable = await axios.get(
      `${this.baseURL}showdates?api_key=${this.apiKey}`
    );
    return showsTable;
  };
}

let bandSite = new bandSiteAPI(key);

// convert ms since epoch timestamp to printable date
function convertDate(ms) {
  const date = new Date(ms);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${month}/${day}/${year}`;
  return currentDate;
}
