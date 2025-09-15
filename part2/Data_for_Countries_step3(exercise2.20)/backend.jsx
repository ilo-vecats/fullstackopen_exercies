import React from 'react'
import axios from 'axios'



const allcountries =()=>{

     const promise = axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`);
     return promise.then(response=>{


        return response.data
    }
    )
}

const weather =(city)=>{
   const api_key = import.meta.env.VITE_API_KEY;
    
        const response =  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
       
        return response.then(response=>response.data)
        
 
}

export default {allcountries,weather}
