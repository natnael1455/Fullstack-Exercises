import React, { useState } from 'react'

const Form = ({addName,newName,handleNameChange,newNumber,handleNumberChange}) =>{
  return(
    <div>
    <h2>Add a New </h2>
    <form onSubmit={addName}>
        <div> name: <input value={newName} onChange={handleNameChange}/></div>
        <div> number: <input value={newNumber} onChange={handleNumberChange}/></div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  </div>
  )
}
const Detail = ({person}) => {
  return (
    <p>{person.name} : {person.number}</p>
  )
}
const Persons = ({personToShow}) => {
  return(
    <div>
     <h2>Numbers</h2>
        {personToShow.map(person =><Detail key={person.name} person={person} />)}
   </div>
  )
}

const Filter = ({showAll,handleShowChange}) =>{
  return(
    <div>
    <h2>Phonebook</h2>
    filter shown with <input value={showAll} onChange={handleShowChange}/>
    </div>
  )
}
const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('enter the name')
  const [newNumber,setNewNumber] = useState('000')
  const [showAll, setShowAll] = useState('')

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
    
      setPersons(persons.concat(personObject))
    }
    
    setNewName('')
    setNewNumber('')
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