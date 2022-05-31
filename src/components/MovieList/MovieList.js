import React from "react";
import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "../../common/settings";

import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../redux/movies/movieSlice";

export default function MovieList() {
  // useSelector allow us to select a function exported from "movieSlice"
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const renderMoviesOrSeries = (moviesOrSeries) => {
    return (
      // Response & Search comes from redux - check redux dev tools to find it
      moviesOrSeries.Response === "True" ? (
        moviesOrSeries.Search.map((movieOrSerie, index) => (
        <MovieCard key={index} data={movieOrSerie} />
      ))
    ) : (
      <div className="movies-error"><h3>Movie or serie not found!</h3></div>
    )
    )}
  
  return (
    <div>
      <div className="slider-container">
        <h2>Movies</h2>
          <Slider {...Settings}>{renderMoviesOrSeries(movies)}</Slider>
      </div>
      <div className="slider-container">
        <h2>Series</h2>
        <Slider {...Settings}>{renderMoviesOrSeries(series)}</Slider>
      </div>
    </div>
  );
}
