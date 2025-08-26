import React from 'react'
import { useState } from 'react'

const StatLine = ({text,value})=>{
 
   return <p><strong>{text}</strong> {value}</p>
   
}

const Check=({good,neutral,bad})=>{
  const all = good+neutral+bad
  if(all== 0) {return <p>no feedback given</p>}
  const average = (good - bad) / all
  const positive = (good / all) * 100
  return (
    <>
      <StatLine text="good" value={good}/>
      <StatLine text="neutral" value={neutral}/>
      <StatLine text="bad" value={bad} />
      <StatLine text="all" value={all} />
      <StatLine text="average" value={average} />
      <StatLine text="positive" value={`${positive} %`} />
    </>
  )

  


}
const Button=({handleClick,text})=>(
  <button onClick={handleClick}>{text}</button>

)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handlegoodclick =()=> {
    setGood(good+1);
  
  }
  const handleneutralclick =()=> {
    setNeutral(neutral+1);

    
  }
  const handlebadclick =()=> {
    setBad(bad+1);
  
  }


  return (
    <div>
      <h1> give feedback</h1>
      <Button handleClick={handlegoodclick} text="good"/>
      <Button handleClick={handleneutralclick} text="neutral"/>
      <Button handleClick={handlebadclick} text ="bad"/>
      <h2>statistics</h2>
      <Check good={good} neutral={neutral} bad ={bad}/>


    </div>
  )
}

export default App
