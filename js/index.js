import { baseUrl } from "./settings/api.js";
import displayMessage from "./componentes/displayMessage.js";
import { searchArticle } from "./componentes/articlefilter.js";
import { createHTML } from "./componentes/createHTML.js";

const articlesUrl = baseUrl + "articles";

async function getArticle() {

    try {
        const response = await fetch(articlesUrl);
        const results = await response.json();

       createHTML(results)
       searchArticle(results)


    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".article-container");
    }
    

};

getArticle()