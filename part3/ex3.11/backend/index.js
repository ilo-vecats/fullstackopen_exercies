
const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

// define custom token for body
morgan.token('body', (req) => JSON.stringify(req.body))

// use morgan middleware with custom format
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let notes = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
  { id: "3", name: "Dan Abramov", number: "12-43-234345" },
  { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" }
]
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
})

app.get('/api/persons', (req, res) => {
  res.json(notes)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id
  notes = notes.filter(note => note.id !== id)
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

  res.json(newNote)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
