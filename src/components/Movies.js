import React from "react";
import { movies } from "../data";

const showFilms = (m, index) => {
  return (
    <div key={index}>
      <h3>Title: {m.title}</h3>
      <p>Time: {m.time}</p>
      <p>Genres:</p>
      <ul>
        {m.genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((m, index) => {
        return showFilms(m, index);
      })}
    </div>
  );
};

export default Movies;
