// redux-toolkit give us extra features that makes easyer to work with redux
import { createSlice } from "@reduxjs/toolkit";

// redux/toolkit allow us to combine "action", "constants" and "reducers" into one file

const initialState = {
    movies: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
            // with redux/toolkit the line above replace the {...state, payload}
            // it does the same, copy the state and add the payload
        }
    },
    extraReducers: {}
})

export const { addMovies } = movieSlice.actions;
// state.<name of the movieSlice>.<property of initialState>
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;
