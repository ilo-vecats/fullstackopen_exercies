import React from 'react'


const PersonForm=({newName,newNumber,setNewName,setNewNumber,persons,setPersons})=>{
const addName=(event)=>{
    event.preventDefault();
    const newperson={
      name:newName,
      id:newName,
      number:newNumber
    }
   
    const normalized = newName.trim().toLowerCase()
    if(persons.some(p=>p.name.toLowerCase()===normalized)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(newperson))
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
    return(
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
    )
}

export default PersonForm
