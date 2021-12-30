import { getExistingFavs } from "./componentes/favFunctions.js";

const favourites = getExistingFavs()

const container = document.querySelector(".article-container")

const clear = document.querySelector(".clear-storage")

if (favourites.length === 0) {
    container.innerHTML = "Nothing in favourites yet";
}

container.innerHTML = "";

favourites.forEach((article) => {
    container.innerHTML += `<div class="article">
                                    <h2>${article.title}</h4>
                                    <h3>By: ${article.author}
                                    <p>Summary: ${article.summary}</p>
                                </div>`;
});

clear.addEventListener("click", clearAll)

function clearAll(){
    localStorage.clear()
    container.innerHTML = `<h3>Like the younglings, these are no more</h3>`
}