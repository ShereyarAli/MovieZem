import React from 'react'
import PropTypes from 'prop-types'
import {  useNavigate } from 'react-router-dom';
import { useFetch } from './customHook/useFetch';
import defaultImage from './assets/default.jpg'

export const Item = ({id,first_air_date,release_date,overview,genre_ids,poster_path, backdrop_path, title, vote_average, name }) => {
  const Navigate = useNavigate()
  const defaultRating = 6.0;
  const pageLink = title || name;

  const handleClick = () => {    
    Navigate(`/${pageLink.split(` `).join(`-`)}/details`,{state:{
      id,
      first_air_date,
      release_date,
      overview,
      genre_ids,
      poster_path,
      backdrop_path,
      title,
      vote_average,
      defaultRating,
      name
    }})
  }

  return (
    <>
      <div className="movieCardCon">
        <img loading='lazy' src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}`: defaultImage} alt='' />
        <p>{title || name}</p>
        <button onClick={handleClick}>Watch Trailer</button>
    </div>
    </>
  )
}

// Item.propTypes = {
//   vote_average: PropTypes.number.isRequired
// }
// Movie.defaultProps = {
//   title: 'UNKNOWN',
//   vote_average: 6
// }
