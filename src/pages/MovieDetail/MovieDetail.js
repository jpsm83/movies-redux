import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetails,
  getSelectedDetail,
  clearDetails,
} from "../../redux/movies/movieSlice";
import {
  StarIcon,
  ThumbUpIcon,
  FilmIcon,
  CalendarIcon,
} from "@heroicons/react/solid";

export default function MovieDetail() {
  const dispatch = useDispatch();

  // useParams get any params needed from the browser address
  // our route = /movie/:imdbID
  // our browser = http://localhost:3000/movie/tt0241527
  // destructure "imdbID" parameter = tt0241527
  // browser can have "infinity" parameters and you can get it destructuring it on the useParams
  const { imdbID } = useParams();

  // useSelector allow us to select any function exported from "movieSlice"
  const data = useSelector(getSelectedDetail);

  // useEffect is a hook that works as life cicle
  // componentDidMount - DidUpdate - Unomnted
  // thats the first function to be called
  useEffect(() => {
    // an action desceibes what have to be done
    // a dispatch execute an action and send it to the reducer
    dispatch(fetchAsyncDetails(imdbID));
    return () => {
      dispatch(clearDetails());
    };

    // an empty dependency option runs the effect only once - componentDidMount
    // an dependency with a parameter runs the effect every time that parameter changes - componentDidUpdated
  }, [dispatch, imdbID]);

  return (
    <div className="main-container">
      {Object.keys(data).length === 0 ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="detail-container">
          <div className="section-left">
            <h1 className="movie-title">{data.Title}</h1>
            <div className="movie-rating">
              <span>
                IMDB Rating <StarIcon className="icons" /> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <ThumbUpIcon className="icons" /> : {data.imdbVotes}
              </span>
              <span>
                Runtime <FilmIcon className="icons" /> : {data.Runtime}
              </span>
              <span>
                Year <CalendarIcon className="icons" /> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director:</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars:</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes:</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages:</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards:</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>

          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
      )}
    </div>
  );
}
