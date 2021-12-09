import {recipes} from './recipes';

let titleSearch = document.getElementById("titleSearch");
let ingSearch = document.getElementById("ingredientsSearch");
let desSearch = document.getElementById("descriptionSearch");

// section.addEventListener("load", showRecipes(recipes));

function showRecipes(recipes) {
    for (let i = 0; i < recipes.length; i++ ) {
        // div contenant la photo et le titre de la recette
        let itemPlats = document.createElement("div");
        let recipePic = document.createElement("div");
        let details = document.createElement("div");
        itemPlats.classList.add("item-plats");
        recipePic.classList.add("recipePic");
        details.classList.add("details");
        itemPlats.appendChild(recipePic);
        itemPlats.appendChild(details);
        // div contenant les ingrédients, le dosage et les instructions de la recette
        let detailTop = document.createElement("div");
        let detailTopSpan = document.createElement("span");
        let detailBottom = document.createElement("div");
        let amount = document.createElement("div");
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let making = document.createElement("div");
        let p = document.createElement("p");
        detailTop.classList.add("detail-top");
        detailTop.appendChild(detailTopSpan);
        detailBottom.classList.add("detail-bottom");
        amount.classList.add("amount");
        ul.appendChild(li);
        amount.appendChild(ul);
        detailBottom.appendChild(amount);
        making.classList.add("making");
        making.appendChild(p);
        // affichage de la recette dans la section recipes
        let sectionPlat = document.getElementById("recipes-block");
        sectionPlat.appendChild(itemPlats);
    }
}

function searchBar (recipes) {
    // Récupérer les 3 premiers caractères
    let searchInput = document.getElementById("searchInput");
    let checkInput = /^[a-zA-Z]{3}/;
    if(checkInput.test(searchInput.value) !=false) {
        // Rechercher dans le titre, les ingrédients et la description des recettes correspondantes
        // Afficher le resultat dans l'interface (l'interface est actualisée)
        // Les champs (ingrédients, ustensils et appareils) contiennent les éléments de la recette
    } else {
        return;
    }
}