import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetails,
  getSelectedDetail,
  clearDetails,
} from "../../redux/movies/movieSlice";

export default function MovieDetail() {
  const dispatch = useDispatch();

  // useParams get any params needed
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
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
            <div className="section-right">
              <img src={data.Poster} alt={data.Title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
