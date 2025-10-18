//	So this line loads the Express framework and
//  stores it in a variable named express.
const express = require('express')

//	When you call it (express()), 
// it creates an Express application instance — 
// often called app.
const app = express()
app.use(express.json())

let notes = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(req,res)=>{
    res.json(notes)
   
})

/*app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  const note = notes.find(note => note.id === id)
  
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})

app.get('/api/persons/:id',(req,res)=>{
    const id = req.params.id
    const note = notes.find(note => notes.id === id)
    
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})*/

app.delete('/api/persons/:id',(req,res)=>{
    const id = req.params.id
    const note = notes.filter(note => note.id !== id)

    res.status(204).end()

})

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body

  
  if (!name || !number) {
    return res.status(400).json({ error: 'name or number is missing' })
  }

 
  const nameExists = notes.some(note => note.name === name)
  if (nameExists) {
    return res.status(400).json({ error: 'name must be unique' })
  }

  
  const id = Math.floor(Math.random() * 1e10).toString()
  const newNote = { id, name, number }
  notes.push(newNote)

  console.log('New note:', newNote)
  res.json(newNote)
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
