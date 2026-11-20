
export async function fetchapi(priority = "", assignee = "", search = "") {
    let object = {}

    if (priority !== "") {
        object.priority = priority
    }

    if (assignee !== "") {
        object.assignee = assignee
    }

    if (search !== "") {
        object.q = search
    }

    
        const respense = await axios.get("https://flowboard-api-virid.vercel.app/cards", {
            headers: {
                "X-Workspace": "walid_messi"
        
            },
             params: object,
             password :"1234"
        });
        
        return respense.data;
 
    
}
export async function getcard(id) {
     return await axios.get('https://flowboard-api-virid.vercel.app/cards/' + id, {
        headers: {
            "X-Workspace": 'walid_messi'
        },
        password: "1234"

    })
}



export async function modifiercartcard(id,data) {
  
const options = {
  method: 'PUT',
  url: 'https://flowboard-api-virid.vercel.app/cards/'+id,
  headers: {
    "X-Workspace": 'walid_messi'
  },
  params:{
     password :"1234"
  },
  data: data,
} 

}
 

export async function suprimmercard(id){
   

const options = {
  method: 'DELETE',
  url: 'https://flowboard-api-virid.vercel.app/cards/'+id,
  headers: {
    "X-Workspace": 'walid_messi'
  },
  params:{
     password :"1234"
  },
}

try {
  const { data } = await axios.request(options)
  console.log(data)
} catch (error) {
  console.error(error)
}
}