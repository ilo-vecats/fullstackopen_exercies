import React from 'react'
import { useState, useEffect } from 'react'
import Services from './src/Services'

const App = () => {

  // State for the form inputs
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])

  // Handler for the filter input
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  // Fetch initial data from backend
  const hook = () => {
    Services
      .getall()
      .then(initialdata => {
        setPersons(initialdata)
      })
  }

  useEffect(hook, []) // useEffect runs once after mount

  // Handlers for form inputs
  const addnewName = (event) => setNewName(event.target.value)
  const addnewNumber = (event) => setNewNumber(event.target.value)

  // Handler for adding/updating contacts
  const addcontact = (event) => {
    event.preventDefault()

    const addperson = {
      name: newName,
      number: newNumber,
    }

    // Check if contact already exists by name
    let exists = persons.find(p => p.name === newName)
    console.log('Checking existence:', exists)

    if (exists === undefined) {
      // Contact doesn't exist → create a new one
      Services
        .create(addperson)
        .then(newdata => {
          setPersons(persons.concat(newdata)) // Add new contact immutably
          setNewName('')
          setNewNumber('')
          console.log('Created new contact:', newdata)
        })
    } else {
      // Contact exists → update the number
      // ❌ Previous mistake: update did not pass the updated data object
     let check= window.confirm(`update the contact of ${exists.name} from ${exists.number} to ${newNumber} ?`)
     if(check){
      Services
        .update(exists.id, { ...exists, number: newNumber }) // Fix: pass updatedPerson
        .then(updateddata => {
          console.log('Updated contact:', updateddata)
          // ❌ Previous mistake: state mutation
          // Correct: map and replace the updated contact immutably
          setPersons(persons.map(person =>
            person.id === updateddata.id ? updateddata : person
          ))
        })
      }
      else console.log('not updated')
      setNewName('')
      setNewNumber('')
    }
  }

  // Handler for deleting contacts
  const removeperson = (ele) => {
    let decision = window.confirm(`Remove ${ele.name}?`)
    if (decision) {
      Services
        .remove(ele.id)
        .then(deleteddata => {
          console.log('Deleted contact:', deleteddata)
          // ❌ Previous mistake: tried to use deleteddata.id (backend might return empty object)
          // Correct: use the id of the element we want to remove
          setPersons(persons.filter(e => e.id !== ele.id))
        })
        .catch(error => console.log(error))
    } else {
      console.log(`Not deleted: ${ele.name}`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with name
        <input value={filter} onChange={handleFilter}></input>
      </div>

      <div>
        <h2>Numbers</h2>
        {persons
          .filter(ele => ele.name && ele.name.toLowerCase().includes(filter.toLowerCase()))
          .map((ele) => (
            <div key={ele.id}>
              <li>{ele.name} {ele.number}</li>
              {/* ❌ Previous mistake: didn't pass a callback → fixed using arrow function */}
              <button onClick={() => removeperson(ele)}>delete contact</button>
            </div>
          ))}
      </div>

      <div>
        <h2>Add a contact</h2>
        <form onSubmit={addcontact}>
          <div>
            <input value={newName} onChange={addnewName}></input>
          </div>
          <div>
            <input value={newNumber} onChange={addnewNumber}></input>
          </div>
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
