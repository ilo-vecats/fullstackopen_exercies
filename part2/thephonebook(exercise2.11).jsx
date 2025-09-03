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
 

// The exercise wants you to replace the state with the data 
// from the server (make the backend the source of truth), not append.
const hook=()=>{
  axios
  .get('http://localhost:3001/persons')
  .then(response=>{
    //dont use persons.concat 
    setPersons(response.data)
  })
}
useEffect(hook,[])
 
  return (
    <div>
      <h2>Phonebook</h2>
         <div>
        filter shown with name
        <input  value={filter} onChange={handleFilter}></input>
       </div>
      
   
      <h2>Numbers</h2>
       {persons.filter((ele)=>ele.name.toLowerCase().includes(filter.toLowerCase()))
             .map((ele)=>(<li key={ele.id}>{ele.name} {ele.number}</li>))
           }
     

      
    </div>
  )
}

export default App

