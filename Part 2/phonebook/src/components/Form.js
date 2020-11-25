import React from 'react'


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
  
export default Form