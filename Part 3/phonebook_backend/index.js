const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, req),
    tokens.url(req, req),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms '+JSON.stringify(req.body)
  ].join(' ')
}))


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
    if(!note){
      return response.status(204).end()
    }
    response.json(note)
    console.log(!note)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons= persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

app.get('/info', (request, response) => {
    let length =persons.length
    let t = Date.now()
    let current = new Date(t).toString();
    console.log(current)
    response.send(`<h3>phonebook has entries of ${length} people</h3>
    <h3>${current}</h3>`)
  })

  app.post('/api/persons', (request, response) => {

  const body = request.body
  
  if (!body.name) {
      return response.status(400).json({ 
        error: 'name is missing' 
      })
    }

    if (!body.number) {
      return response.status(400).json({ 
        error: 'number is missing' 
      })

    }

    if (persons.find(p => p.name.toLocaleLowerCase()=== body.name.toLocaleLowerCase())) {
      return response.status(400).json({ 
        error: 'the name exist in the phone book' 
      })

    }

    const person ={
      "name": body.name,
      "number":body.number,
      "id": Math.floor(Math.random() * 100)
    }
    persons = persons.concat(person)
    response.status(200).json({ 
      succses: 'the name is add in the phone book' 
    })
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })