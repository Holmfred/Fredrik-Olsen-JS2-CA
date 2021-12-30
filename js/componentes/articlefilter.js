import { createHTML } from "./createHTML.js";


export function searchArticle(article) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredArticle = article.filter(function (article) {
            if (article.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });
        createHTML(filteredArticle)
    };
}