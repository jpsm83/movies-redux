import React, { useEffect } from "react";
import "./Home.scss";
import MovieList from "../../components/MovieList/MovieList";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../redux/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();

  // useEffect is a hook that works as life cicle
  // componentDidMount - DidUpdate - Unomnted
  // thats the first function to be called
  useEffect(() => {
    const defaultMovie = "harry";
    const defaultSerie = "friends";

    // an action desceibes what have to be done
    // a dispatch execute an action and send it to the reducer
    dispatch(fetchAsyncMovies(defaultMovie));
    dispatch(fetchAsyncSeries(defaultSerie));

    // an empty dependency option runs the effect only once - componentDidMount
    // an dependency with a parameter runs the effect every time that parameter changes - componentDidUpdated
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieList />
    </div>
  );
}
