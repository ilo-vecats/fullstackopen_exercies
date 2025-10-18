//	So this line loads the Express framework and
//  stores it in a variable named express.
const express = require('express')

//	When you call it (express()), 
// it creates an Express application instance — 
// often called app.
const app = express()

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

app.get('/info',(req,res)=>{

    
    const moment = require('moment-timezone');
    const now = moment().tz("Asia/India").format('ddd MMM DD YYYY HH:mm:ss [GMT]Z');
    res.send(`
    <p>Phonebook has info for ${notes.length} people</p>
    <p>Request received at: ${now} (Indian Standard Time)</p>
  `);
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
