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

app.get('/api/persons/:id', (req, res) =>{
    const id = Number(req.params.id)
    const phoneBook = Data.find(phoneBook => phoneBook.id === id)
    if(phoneBook){
      res.json(phoneBook)
    }else{
      res.status(404).end()
    }
})

app.get('/info',(req, res) =>{
    const count = Data.length
    const currentDate= new Date().toString()
    console.log(currentDate)
    let str = `Phone Book has info for ${count} people. ${currentDate}`
    res.send(str)
    //res.send('Phone Book has info for '+ count +' people.')
})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})