import React, { useState } from 'react'
import { useFetch } from './customHook/useFetch'
import { Item } from './ShowItem'
import 'ldrs/square'
import { PageHandle } from './PageHandling'
import { Header } from './Header'

export const TvShow = () => {
  const[query,setQuery] = useState('')
  const[page, setPage] = useState(1);
  const[show,setShow] = useState(true)
  let url;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzkyMjg3ZWYyOWIwMmUyMGY2YzdiNmJhZDdlMGI3ZCIsIm5iZiI6MTcyMDQ1MDcwNi4xMjAyNzEsInN1YiI6IjY2ODczYWQ1NjdmZDJlYzUzMjVlM2Q0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vsgaymuiPlZncRpciGwa00HWCqrtzb8uVweNsSKmAO8'
    },
    credentials: 'omit'
  }
  if(query){
    url = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=0792287ef29b02e20f6c7b6bad7e0b7d`;
  
  }
    else{
      url = `https://api.themoviedb.org/3/tv/popular?api_key=0792287ef29b02e20f6c7b6bad7e0b7d&page=${page}`
    

  }
  
  const{ loading,product } = useFetch(url,options)
  console.log(product)

  if(loading){
    return(
    <div className='loader'>
      <l-square 
      size="50"
      stroke="4"
      stroke-length="0.25"
      bg-opacity="0.5"
      speed="1.1"
      color="#FAED26"
      ></l-square>
    </div>  
    )
  }

else{  
  return (
    <>
     <Header query={query} setQuery={setQuery} show={show} setShow={setShow} />
    <div className="movieCon">
        {product.map((movieInfo) => {
          return (
          <Item key={movieInfo.id} {...movieInfo} />
          );
          })}
      </div>
       {show && <PageHandle page={page} setPage={setPage} />}
    </>
  )
}
}