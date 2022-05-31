// redux-toolkit give us extra features that makes easyer to work with redux
import { configureStore } from "@reduxjs/toolkit";
// give any name to the slice you are importing
import movieReducers from "../redux/movies/movieSlice";

export const store = configureStore({
  reducer: {
    // same name as the slice you want use the reducers - "imdb" from "movieSlice"
    imdb: movieReducers,
  },
});
