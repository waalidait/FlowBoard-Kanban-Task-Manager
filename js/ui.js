import { fetchapi } from "./api.js";
let product = []
fetchapi().then(data => {
    product = data;
    console.log(data)
    affichertask(product)
})
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

            let desc = document.createElement("p")
            desc.textContent = element.description

             card.appendChild(prp)
            card.appendChild(title)
            card.appendChild(desc)
            done.appendChild(card)
        }
    });
}

function filter() {
    let selcect = document.querySelector("#select")

    selcect.addEventListener("change", function () {
        let value = selcect.value

        let filter = product.filter(element => {
            return element.priority === value
        })

        affichertask(filter)
    })
}
filter()