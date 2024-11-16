import { configureStore, createSlice } from "@reduxjs/toolkit";

// Buat slice untuk movies
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    searchTerm: "",
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// Ekspor actions
export const { setMovies, setSearchTerm } = movieSlice.actions;

// Buat store
const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
});

export default store;
