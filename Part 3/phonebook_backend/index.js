const express = require('express')
const app = express()

let persons =[
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "natnael Yacob",
        "number": "0415697457",
        "id": 5
      },
      {
        "name": "dina yacob",
        "number": "07118808",
        "id": 8
      },
      {
        "name": "enter the name",
        "number": "123",
        "id": 9
      }
    ]
  

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = persons.find(person=> person.id === id)
    response.json(note)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons= persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

app.get('/api/info', (request, response) => {
    let length =persons.length
    let t = Date.now()
    let current = new Date(t).toString();
    console.log(current)
    response.send(`<h3>phonebook has entries of ${length} people</h3>
    <h3>${current}</h3>`)
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})