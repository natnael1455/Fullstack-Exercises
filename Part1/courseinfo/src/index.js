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
      {props.name} {props.ex_value}
    </p>
  )
}

const Content = (props) =>{
  return(
    <div>
    <Part name={props.name1} ex_value={props.ex_value1} />
    <Part name={props.name2} ex_value={props.ex_value2} />
    <Part name={props.name3} ex_value={props.ex_value3} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course_name = {course} />
      <Content name1 = {part1} ex_value1 = {exercises1} name2 = {part2} ex_value2 = {exercises2} name3 = {part3} ex_value3 = {exercises3} />
      <Total total_value = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))