import { baseUrl } from "./settings/api.js";
import displayMessage from "./componentes/displayMessage.js";

const articlesUrl = baseUrl + "articles";

(async function() {
    const container = document.querySelector(".article-container")

    try {
        const response = await fetch(articlesUrl);
        const results = await response.json();

        container.innerHTML = ""

        results.forEach(function(article) {
            container.innerHTML += `<div class="article">
                                        <h2>${article.title}</h4>
                                        <h3>By: ${article.author}
                                        <p>Summary: ${article.summary}</p>
                                        <i class="far fa-heart"></i>
                                    </div>`;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".article-container");
    }
    

})();