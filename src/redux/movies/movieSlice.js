// redux-toolkit give us extra features that makes easyer to work with redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";

// redux/toolkit allow us to combine "action", "constants" and "reducers" into one file

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    // call the imdb api to get the querry needed - read docs
    // store re response into a constante to be reused later
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
      return response.data;
    }
);

export const fetchAsyncSeries = createAsyncThunk(
  "series/fetchAsyncSeries",
  async (term) => {
    // call the imdb api to get the querry needed - read docs
    // store re response into a constante to be reused later
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    // call the imdb api to get the querry needed - read docs
    // store re response into a constante to be reused later
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  selectedMovieOrSerie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearDetails: (state) => {
      state.selectedMovieOrSerie = {};
    },
  },
  extraReducers: {
    // "pending", "fulfilled", "rejected" defined the life cicle of the function "fetchAsyncMovies"
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, series: payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectedMovieOrSerie: payload };
    },
  },
});

export const { clearDetails } = movieSlice.actions;
// state.<name of the movieSlice>.<property of initialState>
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedDetail = (state) => state.movies.selectedMovieOrSerie;
export default movieSlice.reducer;
