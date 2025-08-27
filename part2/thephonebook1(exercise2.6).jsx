import React from 'react'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName=(event)=>{
    event.preventDefault();
    const newperson={
      name:newName,
      id:newName
    }
    setPersons(persons.concat(newperson))
    //setPerson([...persons,newperson])
    console.log("button clicked",event.target)
  }
  const handleChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)

  }

 
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((ele)=>{
        return <li key={ele.name}>{ele.name}</li>

      })
        }
      
    </div>
  )
}

export default App
