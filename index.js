const express = require('express')
const app = express()

app.use(express.json())

let Data = [
    {
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(req, res) =>{
    res.json(Data)
})

app.get('/info',(req, res) =>{
    const count = Data.length
    const currentDate= new Date().toString()
    console.log(currentDate)
    res.send('Phone Book has info for '+ count +' people.' + currentDate)
    //res.send('Phone Book has info for '+ count +' people.')
})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})