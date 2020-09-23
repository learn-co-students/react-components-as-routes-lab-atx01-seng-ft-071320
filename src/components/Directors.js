import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
       <h1>Directors Page</h1>
      {directors.map(director => (
        <div key={director.name} className='director'>

          <h3>Name: {director.name}</h3>

          <p>Movies:</p>
          <ul>
            {director.movies.map(movie => ( <li>{movie}</li> ))}
          </ul>

        </div>
      ))}
    </div>
  );
}

export default Directors
