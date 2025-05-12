import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./SearchSlice";
import tvSeriesReducer from "./TvSeriesSlice";
import cardDetailsReducer from "./CardDetailsSlice";
import wishListReducer from "./WishListSlice";
import VideoPlayerReducer from "./VideoPlayerSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [ "movies", "details","tvSeries", "wishList", "videoPlayer"] 
};

const rootReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
  search: searchReducer,
  tvSeries: tvSeriesReducer,
  details: cardDetailsReducer,
  wishList: wishListReducer,
  videoPlayer: VideoPlayerReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(appStore);
export default appStore;
