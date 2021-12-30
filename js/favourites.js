import { getExistingFavs } from "./componentes/favFunctions.js";

const favourites = getExistingFavs()

const container = document.querySelector(".article-container")

if (favourites.length === 0) {
    container.innerHTML = "Nothing in favourites yet";
}

favourites.forEach((article) => {
    container.innerHTML += `<div class="article">
                                    <h2>${article.title}</h4>
                                    <h3>By: ${article.author}
                                    <p>Summary: ${article.summary}</p>
                                </div>`;
});