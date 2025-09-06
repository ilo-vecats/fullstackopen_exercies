import axios from "axios"

const getall=()=>{
const req=axios.get('http://localhost:3001/persons')
return req.then(response=>response.data);
}

const create=(addperson)=>{
const request =axios.post('http://localhost:3001/persons',addperson)        
return request.then(response=>(response.data))
}

const remove=(id)=>{
const request =axios.delete(`http://localhost:3001/persons/${id}`)
return request.then(response=>(response.data))
}

export default {create,getall,remove}
