import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

// Friday, October 4th, 2024.
// Updated Monday, October 7th and 9th, 2024.

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    fetch("scripts/movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) && matchesSearchTerm(movie, searchTerm)
  );

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        {/* Genre Selector */}
        <div className="filter-slot">
          <label>Genre</label>
          <select className="filter-dropdown" onChange={handleGenreChange}>
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        {/* Rating Selector */}
        <div className="filter-slot">
          <label>Rating</label>
          <select className="filter-dropdown" onChange={handleRatingChange}>
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      {/* Grid of mMovies */}
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
