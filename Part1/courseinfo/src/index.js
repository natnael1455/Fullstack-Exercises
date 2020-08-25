import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
return (
  <h1>{props.course_name}</h1>
)
}

const Part = (props) =>{
  return (
    <p>
      {props.value.name} {props.value.exercises}
    </p>
  )
}

const Content = (props) =>{
  return(
    <div>
    <Part value={props.name1}  />
    <Part value={props.name2}  />
    <Part value={props.name3}  />
    </div>
  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises {props.total_value}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course_name = {course} />
      <Content name1 = {part1} name2 = {part2}  name3 = {part3}  />
      <Total total_value = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))