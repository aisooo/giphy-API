const api_key = "gVvaRHvXvXrFXascltu37903BVdvJSO0";
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

function Giphy() {
  btn.addEventListener("click", (e) => {
    let api_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=16&q=`;
    let search = input.value.trim();

    api_url = api_url.concat(search);

    fetch(api_url)
      .then((res) => res.json())
      .then((content) => {
        for (let i = 0; i < content.data.length; i++) {
          let item = content.data[i];
          console.log(item);

          const BodyofGif = document.querySelector(".partOf_gif");

          let gifItem = document.createElement("div");
          gifItem.classList.add("gifItem");
          let author = document.createElement("h3");
          let img = document.createElement("img");
          let desc_api = document.createElement("p");

          author = item.username;
          img.src = item.images.downsized.url;
          desc_api = item.title;

          console.log(desc_api);

          gifItem.append(`Описание: ${desc_api}`);
          gifItem.append(img);
          gifItem.append(`Автор: ${author}`);
          BodyofGif.append(gifItem);
        }
      });
  });
}

document.addEventListener("DOMContentLoaded", Giphy);
