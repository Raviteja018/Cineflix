// store/tvSeriesWishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const VideoPlayerSlice = createSlice({
  name: "VideoPlayer",
  initialState: {
    videoId: null,
  },
  reducers: {
    addVideoId: (state, action ) => {
      state.videoId = action.payload;
    }
  },
});

export const {
  addVideoId
} = VideoPlayerSlice.actions;

export default VideoPlayerSlice.reducer;
