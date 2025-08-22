import React from 'react'
import { useState } from 'react'




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
      <button onClick={handlegoodclick}>good</button>
      <button onClick={handleneutralclick}>neutral</button>
      <button onClick={handlebadclick}>bad</button>
      <h2>statistics</h2>
      <p>
         good {good}
      </p>
      <p>
         neutral {neutral}
      </p>
      <p>
         bad {bad}
      </p>
   

    </div>
  )
}

export default App
