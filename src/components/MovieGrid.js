import React, { useState, useEffect } from "react";

// Friday, October 4th, 2024.

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("scripts/movies.json")
      .then((response) => response.json()) 

      .then((data) => {
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          console.error("Expected an array of movies, but got:", data);
        }
      });
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`images/${movie.image}`} alt={movie.title} />
          <div className="movie-card-info">
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-genre">{movie.genre}</p>
            <p className="movie-card-rating">{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
