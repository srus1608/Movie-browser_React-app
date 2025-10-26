import React, { useEffect, useState } from "react";
import { fetchMovies } from "./services/movieService";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const loadMovies = async (query = "", genre = "", rating = "") => {
    const data = await fetchMovies(query, genre, rating);
    setMovies(data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="App">
      <h1>🎬 Movie Browser</h1>
      <SearchBar onSearch={(query) => loadMovies(query)} />
      <Filter
        onGenreChange={(genre) => loadMovies("", genre)}
        onRatingChange={(rating) => loadMovies("", "", rating)}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
