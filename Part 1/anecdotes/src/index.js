import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, action }) =>{
  return (
  <button onClick={action}>
    {text}
  </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({vote:[0,0,0,0,0,0],mostvote:0})

  
  const clickhandler = () =>{
    let i =Math.floor(Math.random() * 6)
    setSelected(i)
  }

  const click_vote =()=>{
    const copy = { ...votes }
    copy.vote[selected]+=1
    if (copy.vote[selected] > copy.vote[copy.mostvote]){
      copy.mostvote=selected
    }
    else {
      copy.mostvote=votes.mostvote
    }
      
    setVotes(copy)
  }

  

  return (
    <div>
      <h1>Anecdote of the day</h1>

     <p> {props.anecdotes[selected]} </p>
     <p>it has {votes.vote[selected]} votes </p>

     <p> <Button text='vote' action={click_vote}/> <Button text=' next anecdote' action={clickhandler} /></p>
     <h1>Anecdote with the most votes</h1>
     <p> {props.anecdotes[votes.mostvote]} </p>
     <p>it has {votes.vote[votes.mostvote]} votes </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)