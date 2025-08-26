import React from 'react'
import { useState } from 'react'
const Handleclick=({anecdotes,setSelected})=>{
    function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}
  const handle =()=>{
    const ridx=getRandomInt(0,anecdotes.length)
    setSelected(ridx);
  }
  return (
  <button onClick={handle}>next anecdote</button>
  )


  }
  const Handlevotes=({selected,votes,setVote})=>{

    const handle=()=>{
      const copy=[...votes]
      copy[selected]+=1;
      
      setVote(copy)
    }
    return(

      <button onClick={handle}>vote</button>

    )

  }
  const Handlemax=({anecdotes,vote})=>{
   const maxvalididx=()=>{
      let ans=-1,i=-1;
      vote.forEach((ele,idx)=>{
        if(ele>ans) {
          ans=ele;
          i=idx
        }
      });
      return i;
    }
   
  
    return(
      <div>
      <p>
        {anecdotes[maxvalididx()]}
      </p>
      <p>
        has {vote[maxvalididx()]} votes
      </p>
      </div>

    )

  }
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  

//do not create a state of the max votes of which idx
//just directly use the anecdotes and vote array
  const [selected, setSelected] = useState(0)
  const [vote,setVote]=useState(Array(anecdotes.length).fill(0))




  

  return (
    <div>
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
      has {vote[selected]} votes
      </div>
      <div>
       <Handlevotes selected={selected} votes={vote} setVote={setVote}/> 
      <Handleclick anecdotes={anecdotes} setSelected={setSelected} />
      </div>
    </div>
    <div>
      <h1>Anecdote with the most votes</h1>
      <Handlemax anecdotes={anecdotes} vote={vote}/>

    </div>
    </div>
  )
}

export default App
