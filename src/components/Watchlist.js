import React from "react";
import "../styles/styles.css";
import MovieCard from "./MovieCard";

// Friday October 11th.
// Wednesday October 16th.

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  function matchWatchList(movie) {
    return movie.watchlist;
  }

  const filteredMovies = movies.filter((movie) => matchWatchList(movie));

  return (
    <div>
      <h1 className="title">Your Watchlist</h1>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}
