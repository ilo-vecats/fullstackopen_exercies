import axios from "axios"

// Fetch all contacts
const getall = () => {
  const req = axios.get('http://localhost:3001/persons')
  return req.then(response => response.data)
}

// Create new contact
const create = (addperson) => {
  const request = axios.post('http://localhost:3001/persons', addperson)
  return request.then(response => response.data)
}

// Delete contact
const remove = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`)
  return request.then(response => response.data)
} 

// Update contact
const update = (id, updatedPerson) => {
  const request = axios.put(`http://localhost:3001/persons/${id}`, updatedPerson)
  return request.then(response => response.data) // ✅ Correct: send updated data object,requires two inputs
}

export default { create, getall, remove, update }
