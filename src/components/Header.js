import React from "react";
import "../styles/styles.css";

// Wednesday, October 2nd, 2024.

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="/images/logo.png" alt="moviedux logo" />
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.
      </h2>
    </div>
  );
}
