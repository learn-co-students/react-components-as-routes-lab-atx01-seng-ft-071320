import React from 'react';
import { movies } from '../data';

const Movies = () => {

  console.log(movies)
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return <div>
          <h1>{movie.title}</h1>
          <h3>Runtime: {movie.time} min</h3>
          <ul><h3>Genres</h3>{movie.genres.map((genre) => {return <li>{genre}</li> })}</ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
