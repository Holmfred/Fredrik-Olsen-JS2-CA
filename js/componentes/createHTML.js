import { addFavs } from "./addFavs.js";
import { getExistingFavs } from "./favFunctions.js";

const currentFavs = getExistingFavs()

export function createHTML(results) {
    const container = document.querySelector(".article-container")
    container.innerHTML = "";
    
    results.forEach(function(article){
        
        /* let cssClass = "far"

        const excist = currentFavs.find(function(fav){
            return fav.title === article.title
        })

        if(excist) {
            cssClass = "fa"
        }
 */
        container.innerHTML += `<div class="article">
                                        <h2>${article.title}</h4>
                                        <h3>By: ${article.author}
                                        <p>Summary: ${article.summary}</p>
                                        <i class="far fa-heart" data-summary="${article.summary}" data-title="${article.title}" data-author="${article.author}"></i>
                                    </div>`;
    })

    addFavs()
    
}