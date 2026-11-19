
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

    try {
        const respense = await axios.get("https://flowboard-api-virid.vercel.app/cards", {
            headers: {
                "X-Workspace": "walid_messi"
        
            },
             params: object,
             password :"1234"
        });
        
        return respense.data;

    }catch(error){
     console.log("error", error);
        throw error;
   }
    
}

export async function getcard(id) {
  return await axios.get("https://flowboard-api-virid.vercel.app/cards/"+id)
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

try {
  const { data } = await axios.request(options)
  console.log(data)
} catch (error) {
  console.error(error)
}
}

