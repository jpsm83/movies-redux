import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>

        <div className="card-bottom">
          <h4>{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
      </Link>
    </div>
  );
}
