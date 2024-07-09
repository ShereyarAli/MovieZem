import React, { useState } from 'react'

export const PageHandle = ({page, setPage}) => {
  const[isButton, setButton] = useState(false);

  const handleNextPage = () => {
    page < 50 ? setPage(p => p + 1) : setButton(true) 
  }
  const handlePrevPage = () => {
    page > 1 ? setPage(p => p - 1) : setButton(true)
  }
  return (
    <div className='pageContainer'>
      <button disabled={page === 1 && isButton} onClick={handlePrevPage}>&lt;- Prev</button>
      <p>Page: {page}/50</p>
      <button disabled={page === 50 && isButton} onClick={handleNextPage}>Next -&gt;</button>
    </div>
  )
}
