import React from 'react'
const Header=({name})=>{
  return (

    <h2>{name}</h2>
  
  )
}
const Part=({parts})=>{
  return(
     <>
   {parts.map((ele)=>{
     return(
      <p key ={ele.id}>{ele.name} {ele.exercises}</p>
     )
   })}
   </>
  )
}
const Total=({parts})=>{
  return(
 <p> <strong>total is {parts.reduce((sum,exer)=>sum+exer.exercises, 0)}</strong></p>
  )
}
const Content=({course})=>{
  return (
    <>
    {course.map((ele)=>{
      return(
        //they all share the same key, otherwise gives error
        //needed for top level elements in a list->which is div here
      <div key={ele.id}>
      <Header  name={ele.name}/>
      <Part  parts={ele.parts}/>
      <Total parts={ele.parts} />
      </div>
      )

    })}
    </>

  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
       <h1>Web Development Curriculum</h1>
       <Content course={courses}/>
 
       
    </div>
  )
}
export default App
