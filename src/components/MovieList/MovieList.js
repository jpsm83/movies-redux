import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../redux/movies/movieSlice";
import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

export default function MovieList() {
  // useSelector allow us to select a function exported from "movieSlice"
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  let renderMovies, renderSeries = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => <MovieCard key={index} data={movie} /> )
    ) : (
      <div className="movies-error">{movies.Error}</div>
    );

    renderSeries =
    series.Response === "True" ? (
      series.Search.map((movie, index) => <MovieCard key={index} data={movie} /> )
    ) : (
      <div className="movies-error">{movies.Error}</div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="movie-list">
        <h2>Series</h2>
        <div className="movie-container">{renderSeries}</div>
      </div>
    </div>
  );
}
