 import { fetchapi } from "./api.js";
let product = []

let select = document.querySelector("#select")
let input = document.querySelector("#search")
let error = document.querySelector("#erreur")
function getdata() {
    fetchapi(select.value, "", input.value)
        .then(data => {
            product = data
            affichertask(product)
            error.classList.add("hidden")
        })
        .catch(err => {
            error.classList.remove("hidden")
        })
}
getdata()
select.addEventListener("change", getdata)

input.addEventListener("input", getdata)

let todo = document.querySelector("#todo")
let progress = document.querySelector("#in-progress")
let done = document.querySelector("#done")

/*afficher les tasks*/

function affichertask(data) {

    todo.replaceChildren();
    progress.replaceChildren();
    done.replaceChildren();

    data.forEach(element => {
        if (element.status === "todo") {
            let card = document.createElement("div")
            card.className = "bg-white p-3 rounded-lg mt-3";

            let title = document.createElement("h3")
            title.textContent = element.title

            let prp = document.createElement("p")
            prp.textContent = element.priority
            prp.className = "bg-yellow-500 text-white rounded-lg px-3 py-1 w-24 text-center"
            let desc = document.createElement("p")
            desc.textContent = element.description

            card.appendChild(prp)
            card.appendChild(title)
            card.appendChild(desc)
            todo.appendChild(card)
        }

        if (element.status === "in-progress") {
            let card = document.createElement("div")
            card.className = "bg-white p-3 rounded-lg mt-3";

            let title = document.createElement("h3")
            title.textContent = element.title

            let prp = document.createElement("p")
            prp.textContent = element.priority
            prp.className = "bg-red-500 text-white rounded-lg px-3 py-1 w-24 text-center"
            let desc = document.createElement("p")
            desc.textContent = element.description

            card.appendChild(prp)
            card.appendChild(title)
            card.appendChild(desc)
            progress.appendChild(card)
        }

        if (element.status === "done") {
            let card = document.createElement("div")
            card.className = "bg-white p-3 rounded-lg mt-3";

            let title = document.createElement("h3")
            title.textContent = element.title

            let prp = document.createElement("p")
            prp.textContent = element.priority
            prp.className = "bg-green-400 text-black rounded-lg px-3 py-1 w-24 text-center"
            let desc = document.createElement("p")
            desc.textContent = element.description

            card.appendChild(prp)
            card.appendChild(title)
            card.appendChild(desc)
            done.appendChild(card)
        }
    });
}




let form = document.querySelector("#form-card")



form.addEventListener('submit', function (e) {
    e.preventDefault();

    let newcard = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#desc').value,
        priority: document.querySelector('#Priority').value,
        name: document.querySelector('#name').value,
        status: "todo"

    };

    product.push(newcard);
    affichertask(product);
    form.reset();
})
