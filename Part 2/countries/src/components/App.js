import React, { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [quiry,setQuiry] = useState('')
  
  
  useEffect(() => {
    axios
      .get(' https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  
  const handleQuirychange = (event) =>{
    console.log(event.target.value)
    setQuiry(event.target.value)
  }

  const countriesToShow = (quiry==='')
  ? countries
  : countries.filter(country => country.name.toLowerCase().includes(quiry.toLocaleLowerCase()))

  const countriescont = (countriesToShow.length <=10)
  ? countriesToShow
  :[{name:'too many contries to show, specifay more filter',alpha2Code:'123'}]
  

  return (
    <div>
      Find countries:<input value = {quiry} onChange={handleQuirychange}/>
      <ul>
        {countriescont.map(country => <li key={country.alpha2Code}>{country.name}</li>)}
      </ul>
    </div>
  )
}

export default App