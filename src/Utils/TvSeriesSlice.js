import { createSlice } from "@reduxjs/toolkit";

const TvSeriesSlice = createSlice({
  name: "Tv Series",
  initialState: {
    popular: null,
    airingToday: null,
    onTheAir: null,
    topRated: null,
  },
  reducers: {
    addPopularTvSeries: (state, action) => {
      state.popular = action.payload;
    },
    addAiringTodaySeries: (state, action) => {
      state.airingToday = action.payload;
    },
    addOnTheAirToday : (state, action) => {
        state.onTheAir = action.payload;
    },
    addTopRatedSeries : (state,action ) => {
        state.topRated = action.payload;
    }
  },
});

export const { addPopularTvSeries, addAiringTodaySeries, addOnTheAirToday, addTopRatedSeries } =
  TvSeriesSlice.actions;

export default TvSeriesSlice.reducer;
