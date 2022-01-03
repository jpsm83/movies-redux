import React, { useEffect } from "react";
import "./Home.scss";
import MovieList from "../../components/MovieList/MovieList";
import movieApi from "../../common/apis/movieApi";
import { movieApiKey } from "../../common/apis/movieApiKey";

export default function Home() {

  // useEffect is a hook to work as life cicle
  // componentDidMount - DidUpdate - Unomnted
  // thats the first function to be called
  useEffect(() => {
    const movieText = "Harry";
    // call the imdb api to get the querry needed - read docs
    const fetchMovies = async () => {
        // store re response into a constante to be reused later
      const response = await movieApi
        .get(`?apiKey=${movieApiKey}&s=${movieText}&type=movies`)
        .catch((err) => console.log(err));
      console.log("Response", response);
    };
    fetchMovies();
    // an empty dependency option runs the effect only once - componentDidMount
  }, []);

  return (
    <div>
      <div className="banner-img">
        <h1>hola</h1>
      </div>
      <MovieList />
    </div>
  );
}
