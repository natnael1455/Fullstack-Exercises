import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
)
}
const Part = (props) =>{
  return (<div>{props.part.name} = {props.part.exercises}</div>)
}
const Content = (props)=>{
  return (
    <div>
      
      <p><Part part={props.parts[0]}  /></p>
      <p> <Part part={props.parts[1]} /></p>
      <p><Part part={props.parts[2]} /></p>
    </div>
  )
}

const Total=(props)=>{
  // eslint-disable-next-line
  let sum = 0 

  props.total.forEach(value => sum +=value.exercises )
  return(
  <div>
    Number of exercises {sum}
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}   />
      <p> <Total total= {course.parts} /></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))