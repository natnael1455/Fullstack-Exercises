import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
return (
  <h1>{props.course_name}</h1>
)
}

const Content = (props) =>{
  return(
    <p>
      {props.name} {props.ex_value}
    </p>
  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises {props.total_value}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course_name = {course} />
      <Content name = {part1} ex_value = {exercises1} />
      <Content name = {part2} ex_value = {exercises2} />
      <Content name = {part3} ex_value = {exercises3} />
      <Total total_value = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))