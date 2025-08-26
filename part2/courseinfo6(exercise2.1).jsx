import React from 'react'
const Header=({name})=>{
  return(
    <h1>{name}</h1>
  )
}
const Part=({key,name,exercises})=>{
  return(
    <p>{name} {exercises}</p>
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
