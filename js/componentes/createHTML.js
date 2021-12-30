import { addFavs } from "./addFavs.js";
import { getExistingFavs } from "./favFunctions.js";

const favourites = getExistingFavs()

export function createHTML(results) {
    const container = document.querySelector(".article-container")
    
    container.innerHTML = "";
    
    for (let i = 0; i < results.length; i++) {

        let cssClass = "far";

        const exist = favourites.find(function(fav) {
            return fav.title === results[i].title
        });

        if(exist) {
            cssClass = "fa"
        }

        container.innerHTML += `<div class="article">
                                        <h2>${results[i].title}</h4>
                                        <h3>By: ${results[i].author}
                                        <p>Summary: ${results[i].summary}</p>
                                        <i class="${cssClass} fa-heart" data-summary="${results[i].summary}" data-title="${results[i].title}" data-author="${results[i].author}"></i>
                                    </div>`;
    }

    addFavs()
    
}