import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = ({ text, action }) =>{
  return (
  <button onClick={action}>
    {text}
  </button>
  )
}
const Stat = ({ name, result }) =>{
  return(
  <p>
    {name} {result}
  </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  
  // function calling button even hander
  const  onClick = (button)=>{
    const handler =()=>{
      if(button == "good"){
        setGood(good+1)
      }
      else if (button == "neutral"){
        setNeutral(neutral+1)
      }
      else {
        setBad(bad+1)
      }
      setAll(all +1)
    }
    return handler
  }
 

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' action= {onClick('good')}/> <Button text='neutral' action= {onClick('neutral')}/> <Button text='bad' action= {onClick('bad')}/>
      <h1>stastics</h1>
        <Stat name='good' result={good} />
        <Stat name='neutral' result={neutral} />
        <Stat name='bad' result={bad} />
        <Stat name='all' result={all} />
        <Stat name='averge' result={((good*1)+(bad*-1))/all} />
        <Stat name='positive' result={ (good/all*100) + '%'} />
        
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)