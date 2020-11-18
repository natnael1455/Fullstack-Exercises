import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const sum = 
  parts.map(part => part.exercises).reduce((s, p) => s + p)
  return(
    <h3>Number of exercises {sum}</h3>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
      
    </div>
  )
}

const Course = (props)=>{
  const {courses} = props
  return(
    <div>
      {courses.map(course => <Header key= {course.id} course = {course} />)}
      {courses.map(course => <Content key= {course.id} parts = {course.parts} />)}
      {courses.map(course => <Total key= {course.id} parts = {course.parts} />)}
    
    </div>
 
  )
}
const App = () => {
  const course =[ 
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }]

  return <Course courses ={course} />
}


ReactDOM.render(<App />, document.getElementById('root'))