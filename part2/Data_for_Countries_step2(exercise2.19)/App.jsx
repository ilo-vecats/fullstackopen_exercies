import React, { use } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import backend from './backend'
import Displaycountry from './Displaycountry'



const App = () => {
  const [country,setCountry] = useState([])
  const [filtertext,setfiltertext] = useState('')
  const [selectedcountry,setselectedcountry] = useState(null)
  
 
  const handleChange = (event) =>{
    const name = event.target.value;
    console.log(name)
    setfiltertext(name)
  
}
const handleClick =(c)=>{

  setselectedcountry(c)

}
 const filteredcountries = country.filter(c=>c.name.common.toLowerCase().includes(filtertext.toLowerCase()));
 const hook =()=>{
  backend
  .allcountries()
  .then(response =>{
    setCountry(response)
  })
  
 }
 useEffect(hook,[])
  

  return (
    <div>
      <h1>Countries</h1>

      <h2>find countries</h2>
      <form >
        <input onChange={handleChange}> 
        </input>
      </form>
      <div>

        {(filteredcountries.length > 10)?
        <p> Too many matches, specify </p> 
        :
        (filteredcountries.length === 1)?
         <Displaycountry country ={filteredcountries[0]}/>
        :
        filteredcountries.length === 0?
        <p>No Matches, specify another filter</p>
        :
        filteredcountries.map(c=>(
          <div key={c.name.common}> 
          {c.name.common}
          <button onClick={()=>handleClick(c)}>
            show
          </button>
          {(selectedcountry && selectedcountry.name.common === c.name.common)?
          <Displaycountry country = {c}/>
           : 
           null
          }
          </div>
        ))
}
      </div>
    </div>

  )

}

export default App
