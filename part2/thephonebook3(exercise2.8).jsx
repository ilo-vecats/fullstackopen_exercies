import React from 'react'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'9156457789' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')

  const addName=(event)=>{
    event.preventDefault();
    const newperson={
      name:newName,
      id:newName,
      number:newNumber
    }
    // also if extra spaces were to follow the name
    // a new one was added to the list 
    // so to remove that
    const normalized = newName.trim().toLowerCase()
    if(persons.some(p=>p.name.toLowerCase()===normalized)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(newperson))
    //setPerson([...persons,newperson])

    
    //reset the form to empty 
    //after submission
    setNewName('')
    setNewNumber('')
    console.log("button clicked",event.target)
  }
  const handleNameChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)

  }
   const handleNumberChange=(event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value)

  }

 
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          <div>name: <input value={newName} onChange={handleNameChange}/></div>
           <div>
            number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((ele)=>{
        return (
        <li key={ele.name}>{ele.name} {ele.number}</li>
        )

      })
        }
      
    </div>
  )
}

export default App
