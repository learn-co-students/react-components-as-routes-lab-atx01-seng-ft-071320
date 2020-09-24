import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  // console.log(movies)
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => 
        <div> {movie.title} 
        <br></br>
        <br></br>Runtime: {movie.time}
        {movie.genres.map(genre => <ul>{genre}</ul> )}
        </div>
        )}
    </div>
  );
};

export default Movies;
