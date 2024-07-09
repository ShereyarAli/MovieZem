import React from 'react'
import { NavLink } from 'react-router-dom'


export const Error = () => {
  return (
    <div className='errorCon'>
      <h1>PAGE NOT FOUND</h1>
      <NavLink className='link' to={'/'}>Back To Home</NavLink>
    </div>
  )
}
