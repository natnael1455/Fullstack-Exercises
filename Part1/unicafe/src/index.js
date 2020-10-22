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

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' action= {() => setGood(good+1)}/> <Button text='neutral' action= {() => setNeutral(neutral+1)}/> 
      <Button text='bad' action= {() => setBad(bad+1)}/>
      <h1>stastics</h1>
        <Stat name='good' result={good} />
        <Stat name='neutral' result={neutral} />
        <Stat name='bad' result={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)