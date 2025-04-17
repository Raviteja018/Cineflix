import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    trendingMovies: null,
    topRatedMovies: null,
    documentaryMovies: null,
    tvSeries: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addDocumentaryMovies: (state, action) => {
      state.documentaryMovies = action.payload;
    },
    addTvSeries: (state, action) => {
      state.tvSeries = action.payload;
    }
    
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpComingMovies,
  addTrendingMovies,
  addTopRatedMovies,
  addDocumentaryMovies,
  addTvSeries,
} = movieSlice.actions;

export default movieSlice.reducer;
