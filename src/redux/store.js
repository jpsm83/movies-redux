// redux-toolkit give us extra features that makes easyer to work with redux
import { configureStore } from "@reduxjs/toolkit";
import movieReducers from "../redux/movies/movieSlice";

export const store = configureStore({
  reducer: {
    imdb: movieReducers,
  },
});
