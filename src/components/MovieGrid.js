import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

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
        <MovieCard movie={movie} key={movie.id}></MovieCard>
      ))}
    </div>
  );
}
