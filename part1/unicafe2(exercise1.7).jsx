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
  const average= ()=>{
    //using {all} creates an object , so here use all , good directly
    if(all>0)
    return (good-bad)/all
    return 0;
  }

  const positive =()=>{
    if(all> 0)
    return (good/(all))*(100)
    return 0; 
  }
  //dont use all as a state, here because its not independent
  //it can be derived from good, bad and neutral
  const all = good+bad+neutral
  


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
         bad {bad}
      </p>
       <p>
         neutral {neutral}
      </p>
       <p>
         average {average()}
      </p>
       <p>
         positive {positive()}
      </p>

    </div>
  )
}

export default App
