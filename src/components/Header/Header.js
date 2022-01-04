import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../redux/movies/movieSlice";

export default function Header() {

  const [term, setTerm] = useState('')

  const dispatch = useDispatch();

  const submitHander = (e) => {
    e.preventDefault();
    if (!term) return alert("Please enter a valid movie or serie please!")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setTerm('')
  }

  return (
    <div className="header">
      <Link to="/">
        <h2 className="app-title">Movies Redux</h2>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHander}>
          <input type="text" value={term} placeholder="Search Movies & Series" onChange={(e) => setTerm(e.target.value)} />
          <button type="submit"></button>
        </form>
      </div>
      <div className="user-image">
        <UserIcon />
      </div>
    </div>
  );
}
