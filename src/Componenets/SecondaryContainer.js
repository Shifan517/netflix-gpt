import React from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-64 relative z-20  ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top List"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
