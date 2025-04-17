import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: 'search',
    initialState : {
        searchMovies : null,
    },
    reducers: {
        addSearchMovies : (state, action) => {
            state.searchMovies = action.payload
        }
    }
})

export const {addSearchMovies} = SearchSlice.actions

export default SearchSlice.reducer;
