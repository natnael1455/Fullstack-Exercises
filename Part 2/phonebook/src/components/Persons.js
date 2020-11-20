import React from 'react'

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
export default Persons