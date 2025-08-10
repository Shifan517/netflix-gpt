import React, { useEffect } from "react";

import {  useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";


const VideoBackground = ({ movieId }) => {

const trailer = useSelector((store)=>store.movies.trailerVideo)

 useMovieTrailer(movieId)
  
  return (
    <div className="relative overflow-hidden w-screen h-screen z-0" > 
      <iframe     className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 scale-[1.3]"

        src={"https://www.youtube.com/embed/"+trailer?.key+ "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
        ></iframe>
    </div>
  );
};

export default VideoBackground;
