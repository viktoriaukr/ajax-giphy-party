const giphyForm = document.querySelector("#giphy-party-form");
const search = document.querySelector("#search-button");
const removeBtn = document.querySelector("#remove-button");
const div = document.querySelector("#giphy-area");

function getGif(val) {
  const gifs = val.data.length;
  if (gifs) {
    let random = Math.floor(Math.random() * gifs);
    let newGif = val.data[random].images.original.url;
    let newImg = document.createElement("img");
    newImg.classList.add("img");
    newImg.src = newGif;
    div.append(newImg);
  }
}

search.addEventListener("click", async function searchGif(e) {
  e.preventDefault();
  const input = document.querySelector("#giphy-name");
  let term = input.value;
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: term,
      api_key: "2d3J2WfFG7bJd2iWzpRts6fPlq6Canbm",
    },
  });
  getGif(res.data);
});

removeBtn.addEventListener("click", function () {
  $(div).empty();
});
