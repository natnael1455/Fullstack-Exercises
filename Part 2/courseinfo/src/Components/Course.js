import React from 'react';

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  const Total = ({ parts }) => {
    const sum = 
    parts.map(part => part.exercises).reduce((s, p) => s + p)
    return(
      <h3>Total of {sum} exercises </h3>
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
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
        
      </div>
    )
  }
  
const Course = ({courses})=>{
    const cors=[courses]
    console.log(cors)
    return(
      <div>
        {cors.map(course => <Header key= {course.id} course = {course} />)}
        {cors.map(course => <Content key= {course.id} parts = {course.parts} />)}
        {cors.map(course => <Total key= {course.id} parts = {course.parts} />)}
      
      </div>
   
    )
  }

  export default Course