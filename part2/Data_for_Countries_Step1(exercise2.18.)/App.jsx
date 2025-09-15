import React, { use } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import backend from './backend'




const App = () => {
  const [country,setCountry] = useState([])
  const [filtertext,setfiltertext] = useState('')
  
 
  const handleChange = (event) =>{
    const name = event.target.value;
    console.log(name)
    setfiltertext(name)
  
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
        <div key = {filteredcountries[0].name.common}> 
        <h3>{filteredcountries[0].name.common}</h3>
        <ul>
       <li>Capital:  { filteredcountries[0].capital}</li> 
       <li> Area:  { filteredcountries[0].area}</li> 
       <li> 
        <h3>Languages</h3> 
          <ul>
          {Object.values(filteredcountries[0].languages || {}).map(lang => (
          <li key={lang}>{lang}</li>
          ))}
         </ul>
       </li> 
        <img src = {filteredcountries[0].flags.png} alt="flag"/>
        </ul>
        </div>
        :
        filteredcountries.length === 0?
        <p>No Matches, specify another filter</p>
        :
        filteredcountries.map(c=>(
          <div key={c.name.common}> {c.name.common}</div>
        ))
}
      </div>
    </div>

  )

}

export default App
