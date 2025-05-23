const API_KEY = "32768006ae1f0c0e665eda4705aab7ac"; // Replace with your real GNews API key
const URL = "https://gnews.io/api/v4/search?q=";

window.addEventListener("load", () => fetchNews("Headlines"));

async function fetchNews(query) {
  try {
    let res = await fetch(`${URL}${query}&lang=en&apikey=${API_KEY}`);
    let data = await res.json();
    console.log(data);
    bindNews(data.articles);
  } catch (err) {
    console.log("Error fetching news:", err);
  }
}

const bindNews = (articles) => {
  if (articles.length > 0) {
    let str = "";
    articles.forEach((article) => {
      str += `
        <div class="col-xl-4 news-card">
          <div class="card">
            <img src="${article.image}" class="card-img-top" alt="Image" />
            <div class="card-body">
              <h4 class="card-title">${article.title}</h4>
              <h6>${article.source.name} 📢 ${article.publishedAt}</h6>
              <p class="card-text">${article.description}</p>
              <a href="${article.url}" class="btn btn-primary" target="_blank">Read More</a>
            </div>
          </div>
        </div>`;
    });
    document.querySelector(".row").innerHTML = str;
  }
};

async function fetchCricketNews() {
  await fetchNews("cricket");
}
async function fetchAutomobileNews() {
  await fetchNews("automobile");
}
async function fetchStockNews() {
  await fetchNews("stocks");
}
