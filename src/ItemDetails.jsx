import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { useFetch } from './customHook/useFetch'

export const ItemDetails = () => {
  const location = useLocation()
  const{ id,first_air_date,release_date,overview,genre_ids,poster_path, backdrop_path,title, vote_average, defaultRating, name } = location.state
  
  let url;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzkyMjg3ZWYyOWIwMmUyMGY2YzdiNmJhZDdlMGI3ZCIsIm5iZiI6MTcyMDQ1MDcwNi4xMjAyNzEsInN1YiI6IjY2ODczYWQ1NjdmZDJlYzUzMjVlM2Q0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vsgaymuiPlZncRpciGwa00HWCqrtzb8uVweNsSKmAO8'
    },
    credentials: 'omit'
  }
  if(name){
    url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=0792287ef29b02e20f6c7b6bad7e0b7d`    
  }
  else if(title){
    url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0792287ef29b02e20f6c7b6bad7e0b7d`
  }
  const{product} = useFetch(url,options)
  const trailer = product.filter((video)=>{
    return video.type === 'Trailer'
   })

  const getTrailer = () => {
    if(trailer.length > 0){
      return trailer[0].key
    }
    else{
      return('No trailer Found')
    }
  }

  const genreObj = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    SciFi: 878,
    TV_Movie: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37
  };
  
  const getGenre = (genre_ids) => {
    return genre_ids.map(id => {
      return Object.keys(genreObj).find(key => genreObj[key] === id);
    }).filter(Boolean); 
  };

  const genres = getGenre(genre_ids);
    return (  
      <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path}`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundColor: `rgb(73, 69, 69)`,
        backgroundBlendMode: 'multiply'
        
      }} className='itemDetailsCon'>
        <h2>TRAILER</h2>
        <div className='itemDescriptionCon'>
          <img src={`https://image.tmdb.org/t/p/original/${poster_path}`}></img>
          <div className='descriptionCon'>
            <p><span>Name:</span> {title || name}</p>
            <p><span>Description:</span> {overview}</p>
            <p><span>Genres:</span> {genres.join(', ')}</p>
            <p><span>Release Date:</span> {first_air_date||release_date}</p>
            <p><span>Vote Average:</span> {!vote_average ? defaultRating : vote_average.toFixed(1)}</p>
          </div>
        </div>

        <iframe allowFullScreen src={`https://www.youtube.com/embed/${getTrailer()}`}></iframe>
      </div>
    )
  }

