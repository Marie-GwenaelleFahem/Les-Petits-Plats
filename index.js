import { recipes } from './recipes.js';

let titleSearch = document.getElementById("titleSearch");
let ingSearch = document.getElementById("ingredientsSearch");
let desSearch = document.getElementById("descriptionSearch");



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