
// Dropdown functions
function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
        }
    }

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