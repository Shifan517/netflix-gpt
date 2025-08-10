import React from 'react'
import { useDispatch ,} from 'react-redux';
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from 'react';




const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()
  
  const getMoviesPlaying = async () => {
    const video = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId+ "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await video.json();

    console.log(json);

    const filtered = json.results.filter((video) => video.type == "Trailer");
    const trailer = filtered[2];

    console.log(trailer);

    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    getMoviesPlaying();
  }, []);



}

export default useMovieTrailer