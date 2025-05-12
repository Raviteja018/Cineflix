// store/tvSeriesWishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const VideoPlayerSlice = createSlice({
  name: "VideoPlayer",
  initialState: {
    videoId: null,
    videoInfo: null,
    videoTrailer:null,
    videoSwitch:null,
  },
  reducers: {
    addVideoId: (state, action ) => {
      state.videoId = action.payload;
    },
    addVideoInfo: (state, action) => {
      state.videoInfo = action.payload;
    },
    addVideoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
  },
});

export const {
  addVideoId, addVideoInfo, addVideoTrailer
} = VideoPlayerSlice.actions;

export default VideoPlayerSlice.reducer;
