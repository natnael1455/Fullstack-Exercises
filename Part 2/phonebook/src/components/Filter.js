import React from 'react'

const Filter = ({showAll,handleShowChange}) =>{
    return(
      <div>
      <h2>Phonebook</h2>
      filter shown with <input value={showAll} onChange={handleShowChange}/>
      </div>
    )
  }
  
export default Filter