import React, { useState } from 'react'
import { useFetch } from './customHook/useFetch'
import searchIcon from './assets/search-icon.png'

export const Header = ({show,setShow,query,setQuery}) => {
  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }
  const handleClick = () => {
    let search = document.getElementById('searchBar')
    if(search.value){  
    setQuery(search.value)
    search.value = ''
    setShow(false)
    console.log(show)
    }
  }  
  return (
    <div className='headerCon'>
      <input name='search' autoComplete='off' placeholder='Search' type='text' id='searchBar'/>
      <button onClick={handleClick} className='searchBtn'><img src={searchIcon}></img></button>
    </div>
    )
  }
