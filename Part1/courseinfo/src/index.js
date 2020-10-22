import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (

    <h1>{props.course}</h1>
)
}
const Part = (props) =>{
  return (<p>{props.part.name} = {props.part.exercises}</p>)
}
const Content = (props)=>{
  return (
    <div>
      <Part part={props.parts[0]}  />
       <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
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
      <Total total= {course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))