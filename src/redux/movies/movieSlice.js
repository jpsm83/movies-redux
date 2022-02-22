// redux-toolkit give us extra features that makes easyer to work with redux
// createAsyncThunk is a middleware from redux to make unsyncronous calls
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";

// redux/toolkit allow us to combine "action", "constants" and "reducers" into one file
// createAsyncThunk is a middleware from redux to make unsyncronous calls

export const fetchAsyncMovies = createAsyncThunk(
  "imdb/fetchAsyncMovies",
  async (term) => {
    // call the imdb api to get the querry needed - read docs
    // store re response into a constante to be reused later
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

// createAsyncThunk is a middleware from redux to make unsyncronous calls 

export const fetchAsyncSeries = createAsyncThunk(
  "imdb/fetchAsyncSeries",
  async (term) => {
    // call the imdb api to get the querry needed - read docs
    // store re response into a constante to be reused later
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

// createAsyncThunk is a middleware from redux to make unsyncronous calls

export const fetchAsyncDetails = createAsyncThunk(
  "detail/fetchAsyncDetails",
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
  name: "imdb",
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

    // "pending", "fulfilled", "rejected" defined the life cicle of the function "fetchAsyncSeries"
    [fetchAsyncSeries.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, series: payload };
    },
    [fetchAsyncSeries.rejected]: () => {
      console.log("Rejected!");
    },

    // "pending", "fulfilled", "rejected" defined the life cicle of the function "fetchAsyncDetails"
    [fetchAsyncDetails.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectedMovieOrSerie: payload };
    },
    [fetchAsyncDetails.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { clearDetails } = movieSlice.actions;
// state.<name of the movieSlice>.<property of initialState>
export const getAllMovies = (state) => state.imdb.movies;
export const getAllSeries = (state) => state.imdb.series;
export const getSelectedDetail = (state) => state.imdb.selectedMovieOrSerie;
export default movieSlice.reducer;
