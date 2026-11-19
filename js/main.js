import { modifiercartcard } from "./api.js";

import {
    getdata,
    ajouterTask,
    ouvrirModal
} from "./ui.js";

 
// Les éléments HTML
let select = document.querySelector("#select");
let input = document.querySelector("#search");
let form = document.querySelector("#form-card");
let modefier = document.querySelector("#modify");
 

// Afficher les tasks au démarrage
getdata(select.value, input.value);

// Recherche
input.addEventListener("input", () => {
    getdata(select.value, input.value);
});

// Filtrer par priorité
select.addEventListener("change", () => {
    getdata(select.value, input.value);
});

// Ajouter une task
form.addEventListener("submit", ajouterTask);

// Ouvrir le modal de modification
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modifier")) {
        ouvrirModal(e.target.dataset.id);
    }
});

// Modifier une task
modefier.addEventListener("click", async () => {

    let data = {
        id: my_modal_1.querySelector('[name="idd"]').value,
        title: my_modal_1.querySelector('[name="title"]').value,
        description: my_modal_1.querySelector('[name="description"]').value,
        priority: my_modal_1.querySelector('[name="select"]').value,
        assignee: my_modal_1.querySelector('[name="name"]').value,
        status: my_modal_1.querySelector('[name="status"]').value
    };

    await modifiercartcard(data.id, data);

    getdata(select.value, input.value);

});
