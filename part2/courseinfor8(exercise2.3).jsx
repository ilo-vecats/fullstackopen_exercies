//had to use reduce to calculate the sum
//which I already did in the previous part
import React from 'react'
const Header=({name})=>{
  return(
    <h1>{name}</h1>
  )
}
const Part=({name,exercises})=>{
  return(
    <p>{name} {exercises}</p>
  )

}
const Total=({parts})=>{
  //here add space after the part.exercise) to add space in the browser
  return(
    <p><strong>
  
      total is {parts.reduce((sum,part)=>(sum+part.exercises), 0)}
      </strong></p>
  )

}
const Content=({course})=>{
 return(
  <div>
  {course.parts.map((ele)=>(
    //make sure to add ele.id as the key
    <Part key={ele.id} name={ele.name} exercises={ele.exercises}/>

  ))}
  </div>
 )
    
  
}
const Course=({course})=>{
  return(
    <>
    <Header name={course.name}/>
    <Content course={course}/>
    <Total parts={course.parts}/>
    </>
  )

}
const App = () => {
  const course = {
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
  }

  return <Course course={course} />
}

export default App
