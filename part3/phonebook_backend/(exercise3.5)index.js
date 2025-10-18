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



app.post('/api/persons',(req,res)=>{
      const id = Math.floor(Math.random() * 1e10).toString()
      const note = req.body
      notes.push({ id, ...note })
      console.log('New note:', note)
      res.json({ id, ...note })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
