import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./SearchSlice";
import tvSeriesReducer from "./TvSeriesSlice";


const appStore = configureStore({
    reducer : { 
        user : userReducer,
        movies : movieReducer,
        search : searchReducer,
        tvSeries : tvSeriesReducer,
    }
})

export default appStore;