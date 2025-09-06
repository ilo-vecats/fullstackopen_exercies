import React from 'react'
import Filter from './Filter'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  



  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter,setFilter]=useState('')
  const [persons,setPersons] =useState([])

  const handleFilter=(event)=>{
    console.log(event.target.value);
    setFilter(event.target.value); 
  }
 


const hook=()=>{
  axios
  .get('http://localhost:3001/persons')
  .then(response=>{
    setPersons(response.data)
  })
}
useEffect(hook,[])

const addnewName=(event)=>{
  setNewName(event.target.value)

}
const addnewNumber=(event)=>{
  setNewNumber(event.target.value)
}

const addcontact=(event)=>{
  event.preventDefault()
  const addperson={
    name:newName,
    number:newNumber,

  }
axios
 .post('http://localhost:3001/persons',addperson)
 .then(response=>{
  setPersons(persons.concat(response.data))
  //clear the input
  setNewName('')
  setNewNumber('')
  console.log(response.data)
})
}
 
  return (
    <div>
      <h2>Phonebook</h2>
         <div>
        filter shown with name
        <input  value={filter} onChange={handleFilter}></input>
       </div>
      
     <div>
      <h2>Numbers</h2>
       {persons.filter((ele)=>ele.name.toLowerCase().includes(filter.toLowerCase()))
             .map((ele)=>(<li key={ele.id}>{ele.name} {ele.number}</li>))
           }
      </div>
      <div>
      <h2>add a contact</h2>
      <form onSubmit={addcontact}>
        <div>
        <input value={newName} onChange ={addnewName} ></input>
        </div>
        <div>
        <input value ={newNumber} onChange={addnewNumber}></input>
        </div>
        <button >submit</button>

      </form>
      </div>

     

      
    </div>
  )
}

export default App

