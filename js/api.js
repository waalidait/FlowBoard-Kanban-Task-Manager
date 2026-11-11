 export function fetchapi(){
     return fetch('https://flowboard-api-virid.vercel.app/cards')
     .then(result => result.json())
 }

// let todo = document.querySelector('#todo');

// fetch('https://flowboard-api-virid.vercel.app/cards')
// .then(result => result.json())
// .then(produit => {

//    let card = produit.filter(item => item.priority=== "low");
//    console.log(card)
//         todo.innerHTML += `
//     card.forEach(item => {
//             <div class="bg-white rounded-xl p-4 mt-8">

//                 <h3>${item.title}</h3>
//                 <p>${item.description}</p>
//             </div>
//         `;
//     });

// });
