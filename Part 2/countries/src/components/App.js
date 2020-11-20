import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Singl = ({country}) =>{

  const [weather,setWeather]= useState([])
  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key)
  const qr= 'http://api.weatherstack.com/current?access_key='+api_key+'&query=' + country.capital
  useEffect(() => {
    axios
      .get(qr)
      .then(response => {
        setWeather(response.data.current)
      })
  }, [])
  
  console.log(weather.temperature)
  return(
    <div>
      <h2>{country.name}</h2>
      
      Capital city :{country.capital}<br/>
      population : {country.population} <br/>
    

      languages : 
         <ul>
           {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
         </ul>
    <img src ={country.flag}  alt="flag"  width="25%" hight="25%"/>

    <br/>Temperature:{weather.temperature} degree celiues <br/>
     wind speed : {weather.wind_speed} wind direction: {weather.wind_degree} {weather.wind_dir}
    </div>
  )

}
const Display = ({countriesToShow,handleQuirychangel})=>{

  if (countriesToShow.length > 10){
    return (
      <p>too many contries to show, specifay more filter</p>
    )
  }
  else{
    if (countriesToShow.length > 1 ){

     
      return (
        <div >
          <h2>countries</h2>
          <ul>
          {countriesToShow.map(country => <li key={country.alpha2Code}>{country.name} 
          <button id={country.name} onClick={handleQuirychangel}>show</button></li>)}
        </ul>
        </div>
        
      )
    }
     else {
       return (
        countriesToShow.map(country => < Singl key={country.alpha2Code} country={country} />)
       )
     }
  }
    

}
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

  const handleQuirychangel = (event) =>{
    console.log(event.target.id)
    setQuiry(event.target.id)
  }

  const countriesToShow = (quiry==='')
  ? countries
  : countries.filter(country => country.name.toLowerCase()
    .includes(quiry.toLocaleLowerCase()))


  return (
    <div >
      Find countries:<input value = {quiry} onChange={handleQuirychange}/>
      <div>
       <Display countriesToShow ={countriesToShow}  handleQuirychangel={handleQuirychangel}/>
      </div>
      
    </div>
  )
}

export default App