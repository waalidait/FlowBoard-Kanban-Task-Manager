import { fetchapi, getcard} from "./api.js";

let product = []
let error = document.querySelector("#erreur");
export function getdata(priority, search) {

    fetchapi(priority, "", search)
        .then(data => {
            product = data
            affichertask(product)
            error.classList.add("hidden")
        })
        .catch(err => {
            error.classList.remove("hidden")
        })
}

 

let todo = document.querySelector("#todo")
let progress = document.querySelector("#in-progress")
let done = document.querySelector("#done")

/*afficher les tasks*/

export function affichertask(data) {

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

            let modifier = document.createElement('button')
            modifier.className = "border p-2 modifier"
            modifier.textContent = "modifier"
            modifier.setAttribute("data-id", element.id)

           
            card.appendChild(prp)
            card.appendChild(title)
            card.appendChild(desc)
            card.appendChild(modifier)
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


            let modifier = document.createElement('button')
            modifier.className = "border p-2 modifier"
            modifier.textContent = "modifier"
            modifier.setAttribute("data-id", element.id)

            card.appendChild(prp)
            card.appendChild(title)
            card.appendChild(desc)
            card.appendChild(modifier)
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
            let modifier = document.createElement('button')
            modifier.className = "border p-2 modifier"
            modifier.textContent = "modifier"
            modifier.setAttribute("data-id", element.id)

            card.appendChild(prp)
            card.appendChild(title)
            card.appendChild(desc)
            card.appendChild(modifier)
            done.appendChild(card)

            
        }
    });
}

export async function ouvrirModal(id) {

    let { data } = await getcard(id);

    my_modal_1.showModal();

    my_modal_1.querySelector('[name="title"]').value = data.title;
    my_modal_1.querySelector('[name="description"]').value = data.description;
    my_modal_1.querySelector('[name="select"]').value = data.priority;
    my_modal_1.querySelector('[name="name"]').value = data.assignee;
    my_modal_1.querySelector('[name="idd"]').value = data.id;
    my_modal_1.querySelector('[name="status"]').value = data.status;
}


export function ajouterTask(e) {
    e.preventDefault();

    let newcard = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#desc').value,
        priority: document.querySelector('#Priority').value,
       assignee: document.querySelector('#name').value,
        status: "todo"
    };

    product.push(newcard);
    affichertask(product);
    document.querySelector("#form-card").reset();
}
