import React from 'react';
import { directors } from '../data';

const showMovies = (d, index) => {
  return (
    <div key={index}>
      <h3>Name: {d.name}</h3>
      <p>Movies:</p>
      <ul>
        {d.movies.map((m, index) => (
          <li key={index}>{m}</li>
        ))}
      </ul>
    </div>
  );
};

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d, index) => showMovies(d, index))}
    </div>
  );
}

export default Directors
