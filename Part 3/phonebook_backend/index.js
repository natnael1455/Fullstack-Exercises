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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})