import React from 'react'
import personService from '../services/person'



  const Persons = ({personToShow}) => {

    const hadleDeletePersonOf =(person)=>{
      const result = window.confirm(`do you want to delete ${person.name}`);
      if (result){
        personService
        .delet(person.id)
        .then(returnedPerosn => {
        console.log(returnedPerosn)
        })
      }
     
    }

    return(
      <div>
       <h2>Numbers</h2>
       <table>
         <tbody>
        {personToShow.map(person =><tr key={person.name}>
          <td>{person.name}</td> 
          <td>{person.number}</td>
          <td><button onClick={()=>hadleDeletePersonOf(person)}>Delete</button></td>
          </tr>)}
        </tbody>
      </table>
          
     </div>
    )
  }
export default Persons