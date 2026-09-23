import { smjerovi } from "./SmjerPodaci";

// 1/4 Read od CRUD
async function get(){
    return {data: [...smjerovi]} // [...] stvara novi niz s istim podacima
}



export default{
    get
}