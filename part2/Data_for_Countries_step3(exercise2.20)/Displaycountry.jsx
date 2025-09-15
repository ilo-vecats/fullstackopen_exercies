import React from 'react'


const Displaycountry=({country})=>{
    return (
 
        <div key = {country.name.common}> 
        <h3>{country.name.common}</h3>
        <ul>
       <li>Capital:  { country.capital}</li> 
       <li> Area:  { country.area}</li> 
       <li> 
        <h3>Languages</h3> 
          <ul>
          {Object.values(country.languages || {}).map(lang => (
          <li key={lang}>{lang}</li>
          ))}
         </ul>
       </li> 
        <img src = {country.flags.png} alt="flag"/>
        </ul>
        </div>
    )

}
export default Displaycountry
