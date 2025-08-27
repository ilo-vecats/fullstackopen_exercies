import React from 'react'
import {useState} from 'react'
const Filter=({setFilter,filter})=>{
const handleFilter=(event)=>{
    console.log(event.target.value);
    setFilter(event.target.value);
}
return(
     <div>
        filter shown with
        <input  value={filter} onChange={handleFilter}></input>
    </div>
)
}
export default Filter
