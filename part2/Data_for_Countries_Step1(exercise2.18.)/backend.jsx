import react from 'react'
import axios from 'axios'



const allcountries =()=>{

     const promise = axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`);
     return promise.then(response=>{


        return response.data
    }
    )
}

export default {allcountries}
