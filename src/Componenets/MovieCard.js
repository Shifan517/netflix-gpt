 import React from 'react'
import { Poster_img } from '../utils/constants'



const MovieCard = ({poster}) => {
    
 
      return (
    <div className='w-40 pr-4 '>
     
      <img src={ Poster_img + poster} alt='Movie_Card'/>
    </div>
  )
}

export default MovieCard