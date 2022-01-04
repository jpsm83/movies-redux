import React, { useEffect } from "react";
import "./Home.scss";
import MovieList from "../../components/MovieList/MovieList";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../redux/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch()

  // useEffect is a hook to work as life cicle
  // componentDidMount - DidUpdate - Unomnted
  // thats the first function to be called
  useEffect(() => {
    const defaultMovie = "harry";
    const defaultSerie = "friends"
    // dispatch execute an action "fetchAsyncMovies" from movieSlice and send it to the reducer
    dispatch(fetchAsyncMovies(defaultMovie))
    dispatch(fetchAsyncSeries(defaultSerie))
    // an empty dependency option runs the effect only once - componentDidMount
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  );
}
