import React from 'react'
import { useState, useEffect } from 'react'
export const useFetch = (url,options) => {
  const[product, setProduct] = useState([])
  const[loading, setloading] = useState(true)

  async function getMovie(){
    try{
      const resp = await fetch(url,options)  
      if(resp.ok){
        const data = await resp.json()
        setProduct(data.results)
        setloading(false)
     
      }
      else{
        console.log(resp)
        throw new Error
      }
  }
  catch(Error){
    console.error(Error)
  }
  }
  useEffect(()=>{
    getMovie() 
  },[url])
return{loading, product}
}
