import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([ { name: 'Arto Hellas' }]) 
  const [ newName, setNewName ] = useState('enter the name')
  const addName = (event) => {
    event.preventDefault()
    const same = (element) => element  === newName;

    if (persons.map(person => person.name).some(same)){
      window.alert(newName+' is already added in the phonebooks');
    }
    else {
      const personObject = {
        name: newName
      }
    
      setPersons(persons.concat(personObject))
    }
    
    setNewName('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =><p key={person.name}>{person.name}</p>)}
    </div>

    
  )
}

export default App