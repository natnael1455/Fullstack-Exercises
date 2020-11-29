const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, req),
    tokens.url(req, req),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms '+JSON.stringify(req.body)
  ].join(' ')
}))


    const Person= require('./models/person')


app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


app.get('/api/persons', (request, response) => {
  Person.find({}).then(results => {
    response.json(results)
    })
})


app.get('/api/persons/:id', (request, response) => {

  Person.findById(request.params.id).then(note => {
    response.json(note)
   
  })
  .catch((error) =>{
    
    return response.status(204).end()
  })

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

   
    
    const person = new Person({
      name:body.name,
      number:body.number
    })

  person.save().then(result => {
      response.status(201).json(result)
      .catch((error) =>{
      response.status(204).end()
      })
  })
  })

  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })