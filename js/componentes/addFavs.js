import { getExistingFavs } from "./favFunctions.js";

export function addFavs() {
    const favButton = document.querySelectorAll(".article i")


    favButton.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick() {
        this.classList.toggle("fa");
        this.classList.toggle("far");

        const title = this.dataset.title;
        const summary = this.dataset.summary;
        const author = this.dataset.author

        const currentFavs = getExistingFavs();

        const findFavs = currentFavs.find(function(fav) {
            return fav.title === title;
        });


        if (!findFavs) {
            const article = { title: title, summary: summary, author: author };

            currentFavs.push(article);

            saveFavs(currentFavs);
            
        } else {
            const newFavs = currentFavs.filter(fav => fav.title !== title);
            saveFavs(newFavs);
        }
    }

    function saveFavs(favs) {
        localStorage.setItem("favourites", JSON.stringify(favs));
    }
}