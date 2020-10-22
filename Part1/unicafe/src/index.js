import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = ({ text, action }) =>{
  return (
  <button onClick={action}>
    {text}
  </button>
  )
}
const Statistics = ({ good , neutral , bad   }) =>{
  let all= good + neutral + bad
  let avr= ((good*1)+(bad*-1))/all
  let per= good*100/all
  if (all == 0){
    return(<p>no feedback is given </p>)
  }
  else {
  return(
    <div>
  <p>
    Good {good}
  </p>
  <p>
   Neutral {neutral}
 </p>
 <p>
   Bad {bad}
 </p>
 <p>
   All {all}
 </p>
 <p>
   Averge {avr}
 </p>
 <p>
   Positive {per}
 </p>
 </div>
  )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  // function calling button even hander
  const  onClick = (button)=>{
    const handler =()=>{
      if(button === "good"){
        setGood(good+1)
      }
      else if (button === "neutral"){
        setNeutral(neutral+1)
      }
      else {
        setBad(bad+1)
      }
      
    }
    return handler
  }
 

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' action= {onClick('good')}/> <Button text='neutral' action= {onClick('neutral')}/> <Button text='bad' action= {onClick('bad')}/>
      <h1>stastics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)