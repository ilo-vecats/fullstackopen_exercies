import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])



  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter,setFilter]=useState('')

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

  const handleFilter=(event)=>{
    console.log(event.target.value);
    setFilter(event.target.value);


  }

 
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input  value={filter} onChange={handleFilter}></input>
      </div>
      <h3> add a new</h3>
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
      {persons.filter((ele)=>ele.name.toLowerCase().includes(filter.toLowerCase()))
        .map((ele)=>(<li key={ele.id}>{ele.name} {ele.number}</li>))
    }
      
    </div>
  )
}

export default App
