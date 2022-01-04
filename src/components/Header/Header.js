import React, { useState } from "react";
import { UserIcon, SearchIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../redux/movies/movieSlice";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const submitHander = (e) => {
    // event preventDefault prevent the page to refresh
    e.preventDefault();
    if (!term) return alert("Please enter a valid movie or serie please!");

    // an action desceibes what have to be done
    // a dispatch execute an action and send it to the reducer
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setTerm("");
    history.push("/");
  };

  return (
    <div className="header">
      <Link to="/">
        <h2 className="app-title">Movies Redux</h2>
      </Link>

      <div className="logo-container">
        <a href="https://github.com/jpsm83/movies-redux" target="blank">
          <img src="./images/github.webp" alt="Github logo" className="logo" />
          <p className="">Code</p>
        </a>
      </div>

      <div className="logo-container">
        <a href="https://www.linkedin.com/in/joaopsmachado/" target="blank">
          <img src="./images/linkedin.jpg" alt="Linkedin logo" className="logo" />
          <p className="">Linkedin Joao</p>
        </a>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHander}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies & Series"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <SearchIcon className="search-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}