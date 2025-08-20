import React from "react"
const Header =(props)=>{
  return(
    <h1>
      {props.obj.name}
    </h1>
  )
}
const Part =(props)=>{
  return (
    <p>
    {props.part.name} {props.part.exercises}
    </p>
  )
}
const Content =(props)=>{
  return(
  <>
  <Part part = {props.obj.parts[0]}/>
  <Part part = {props.obj.parts[1]}/>
  <Part part = {props.obj.parts[2]}/>
  </>
  )

}
const Total = (props) =>{
  let sum=0;

 props.obj.parts.forEach( value =>
  //parts has two properties name and exercises, so 
  //value has both
    sum+=value.exercises
    
  )
  return (
   <p>
     Number of exercises are {sum}
    </p>
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
     <Header obj ={course}/>
     <Content obj ={course} />
     <Total obj ={course} />
    
    </div>
  )
}

export default App
