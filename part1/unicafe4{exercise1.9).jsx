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

  //dont use all as a state, here because its not independent
  //it can be derived from good, bad and neutral
  /*
  dont do this becomes verly complicated
  //also if you passed Check props={obj}
  //then props:obj-> cretaes props.props.good.text
  //instead use some other variable, data={obj} props:data, now props.data.good.text
  const all = good+bad+neutral
  const obj={
    good:{
      text:"good",
      value:good
    },
    bad:{
      text:"bad",
      value:bad
    },
    neutral:{
      text:"neutral",
      value:neutral
    },
    all:{
      text:"all",
      value:all
    },
    average:{
      text:"average",
      value:function(){
        if(all>0)
        return (good-bad)/all
      return 0;
      }
    },
    positive:{
      text:"positive",
      value:function(){
        if(all>0)
        return good/all
      return 0;
      }
    }



  }
    */
  


  return (
    <div>
      <h1> give feedback</h1>
      <button onClick={handlegoodclick}>good</button>
      <button onClick={handleneutralclick}>neutral</button>
      <button onClick={handlebadclick}>bad</button>
      <h2>statistics</h2>
      <Check good={good} neutral={neutral} bad ={bad}/>


    </div>
  )
}

export default App
