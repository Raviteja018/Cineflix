// store/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    movies: [],
    tvSeries: [],
  },
  reducers: {
    // Movies
    addToWishlistMovies: (state, action) => {
      const exists = state.movies?.find(
        (movie) => movie?.id === action.payload?.id
      );
      if (action.payload && !exists) {
        state.movies.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.movies = state.movies?.filter(
        (movie) => movie?.id !== action.payload
      );
    },

    // TV Series
    addToWishlistSeries: (state, action) => {
      const exists = state.tvSeries?.find(
        (series) => series?.id === action.payload?.id
      );
      if (action.payload && !exists) {
        state.tvSeries.push(action.payload);
      }
    },
    removeFromWishlistSeries: (state, action) => {
      state.tvSeries = state.tvSeries?.filter(
        (series) => series?.id !== action.payload
      );
    },
  },
});

export const {
  addToWishlistMovies,
  removeFromWishlist,
  addToWishlistSeries,
  removeFromWishlistSeries,
} = WishlistSlice.actions;

export default WishlistSlice.reducer;
