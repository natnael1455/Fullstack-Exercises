/* eslint-disable no-undef */
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


app.get('/api/persons', (request, response,next) => {
  Person.find({})
    .then(results => {
      response.json(results)
    })
    .catch(error => next(error))
})


app.get('/api/persons/:id', (request, response,next) => {

  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      }
      else {
        response.status(404).end()
      }
    })

    .catch(error => next(error)) })


app.delete('/api/persons/:id', (request, response,next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.get('/info', (request, response,next) => {
  Person.find({})
    .then(persons => {
      let length =persons.length
      let t = Date.now()
      let current = new Date(t).toString();
      console.log(current)
      response.send(`<h3>phonebook has entries of ${length} people</h3>
    <h3>${current}</h3>`)
    })
    .catch(error => next(error))})



app.put('/api/persons/:id', (request, response,next) => {
  const id =request.params.id
  const body=request.body
  Person.findByIdAndUpdate(id,{ number:body.number },{ new: true, runValidators: true })
    .then(person => {
      response.json(person)
    }).catch(error => next(error))
}
)

app.post('/api/persons', (request, response, next) => {

  const body = request.body
  const person = new Person({
    name:body.name,
    number:body.number
  })

  person.save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => next(error))
})

// eslint-disable-next-line no-unused-vars
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'the id does not exit' })
  }
  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message }).end()
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})