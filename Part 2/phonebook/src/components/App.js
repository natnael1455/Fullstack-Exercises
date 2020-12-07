import React, { useState,useEffect } from 'react'
import Form from './Form'
import Persons from './Persons'
import Filter from './Filter'
import personService from '../services/person'


const Notification = ({ message}) => {

  const notifactionStyle = {
    color: message.color,
    background:'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }
  
  if (message.msg === null) {
    return null
  }


  return (
    <div className="error" style={notifactionStyle}>
      {message.msg}
    </div>
  )
}



const App = () => {

  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('enter the name')
  const [newNumber,setNewNumber] = useState('000')
  const [showAll, setShowAll] = useState('')
  const [errorMessage, setErrorMessage] = useState({msg:null,color:'green'})
  
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  
  
  const addName = (event) => {
    event.preventDefault()
    const per = persons.find(person => person.name === newName)
    if(per){
      const result = window.confirm(`the name ${newName} exists do you want change`)
      if(result){
        per.number = newNumber
        personService
        .update(per.id, per)
        .then(returnedPerosn => {
          
          const newMessage ={msg:` the number for ${newName} is changed to ${newNumber} in the phone book`,
          color: 'green'
          }
        setErrorMessage( newMessage)
        setTimeout(() => {
          setErrorMessage({msg:null,color:'green'})
        }, 5000)
          setPersons(persons.map(person => person.id !== returnedPerosn.id? person: returnedPerosn))
        })
        .catch(error => {
          // this is the way to access the error message
          const err=error.response.data.error
          const newMessage ={msg:err,
        color: 'red'
      }
        setErrorMessage( newMessage)
          setTimeout(() => {
            setErrorMessage({msg:null,color:'green'})
          }, 5000)

        }) 
      }
    }
    else{
      const personObject = {
        name: newName,
        number:newNumber
      }

      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        const newMessage ={msg:`${newName} is added to the phone book`,
        color: 'green'
      }
        setErrorMessage( newMessage)
        setTimeout(() => {
          setErrorMessage({msg:null,color:'green'})
        }, 5000)
        })
        .catch(error => {
          // this is the way to access the error message
          const err=error.response.data.error
          const newMessage ={msg:err,
        color: 'red'
      }
        setErrorMessage( newMessage)
          setTimeout(() => {
            setErrorMessage({msg:null,color:'green'})
          }, 5000)

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
  : persons.filter(person => person.name.toLowerCase()
  .includes(showAll.toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter showAll={showAll} handleShowChange={handleShowChange} />
      <Form addName={addName} 
        newName={newName} 
        handleNameChange ={handleNameChange} 
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />

      <Persons personToShow={personToShow} />
    </div>

    
  )
}

export default App