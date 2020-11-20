import React, { useState,useEffect } from 'react'
import Form from './Form'
import Persons from './Persons'
import Filter from './Filter'
import axios from 'axios'

const App = () => {

  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('enter the name')
  const [newNumber,setNewNumber] = useState('000')
  const [showAll, setShowAll] = useState('')
  
  useEffect(() => {
    axios
      .get(' http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  const addName = (event) => {
    event.preventDefault()
    const same = (element) => element  === newName;

    if (persons.map(person => person.name).some(same)){
      window.alert(newName+' is already added in the phonebooks');
    }
    else {
      const personObject = {
        name: newName,
        number:newNumber
      }
      axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
      console.log(response)
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      })
    }
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleShowChange = (event) => {
    console.log(event.target.value)
    setShowAll(event.target.value)
  }

  const personToShow = (showAll==='')
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(showAll.toLocaleLowerCase()))

  return (
    <div>
      <Filter showAll={showAll} handleShowChange={handleShowChange} />
      <Form addName={addName} newName={newName} handleNameChange ={handleNameChange} newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <Persons personToShow={personToShow} />
    </div>

    
  )
}

export default App