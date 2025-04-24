// store/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const WishListSearchSlice = createSlice({
  name: "searchWishlist",
  initialState: {
    movies: [],
  },
  reducers: {
    // Movies
    addToWishlistMovies: (state, action) => {
      const exists = state.movies.find(
        (movie) => movie.id === action.payload.id
      );
      if (!exists) {
        state.movies.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },


  },
});

export const {
  addToWishlistMovies,
  removeFromWishlist,
} = WishListSearchSlice.actions;

export default WishListSearchSlice.reducer;
