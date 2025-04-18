import { createSlice } from "@reduxjs/toolkit";

const CardDetailsSlice = createSlice({
  name: "cardDetails",
  initialState: {
    homeCardDetails: null,
    tvSeriesCardDetails: null,
    searchCardDetails: null,
  },
  reducers: {
    addHomeCardDetails: (state, action) => {
      state.homeCardDetails = action.payload;
    },
    addTvSeriesCardDetails: (state, action) => {
      state.tvSeriesCardDetails = action.payload;
    },
    addSearchCardDetails: (state, action) => {
      state.searchCardDetails = action.payload;
    },
  },
});

export const {
  addHomeCardDetails,
  addTvSeriesCardDetails,
  addSearchCardDetails,
} = CardDetailsSlice.actions;

export default CardDetailsSlice.reducer;
