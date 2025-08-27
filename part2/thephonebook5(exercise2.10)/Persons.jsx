import React from 'react'
const Persons =({persons,filter})=>{
    return(
        <>
           {persons.filter((ele)=>ele.name.toLowerCase().includes(filter.toLowerCase()))
             .map((ele)=>(<li key={ele.id}>{ele.name} {ele.number}</li>))
           }
        </>
    )
}
export default Persons
