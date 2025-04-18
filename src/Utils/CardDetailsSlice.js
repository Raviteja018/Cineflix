import { createSlice } from "@reduxjs/toolkit";


const CardDetailsSlice = createSlice({
    name: 'cardDetails',
    initialState: {
        homeCardDetails : null,
    },
    reducers:{
        addHomeCardDetails:(state, action) => {
            state.homeCardDetails = action.payload;
        }
    }
})

export const {addHomeCardDetails} = CardDetailsSlice.actions;

export default CardDetailsSlice.reducer;