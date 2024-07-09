import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import menuIcon from './assets/menu-icon.png'

export const NavBar = () => {

  return (
    <div className='navCon'>
      <h2>MovieZem</h2>
        <img src={menuIcon}></img>
        <ul>
        <Link to={'/'} className='navLink'>Home</Link>
        <Link to={'/about'} className='navLink'>About</Link>
        <Link to={'/tvshows'} className='navLink'>Tv Shows</Link>
      </ul>
    </div>
  )
}
