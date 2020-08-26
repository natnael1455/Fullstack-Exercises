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
      {props.values.name} {props.values.exercises}
    </p>
  )
}

const Content = (props) =>{
  let part_arry = props.parts_a.map(value => <Part values={value}  />)
  return(
    <div>
     {part_arry}
  </div>
  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises {props.total_value[0].exercises + props.total_value[1].exercises 
      + props.total_value[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course_name = {course} />
      <Content parts_a = {parts} />
      <Total total_value = {parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))