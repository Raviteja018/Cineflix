// store/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    movies: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.movies.find((movie) => movie.id === action.payload.id);
      if (!exists) {
        state.movies.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;
