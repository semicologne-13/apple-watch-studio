import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isGettingStarted: true,
    isWatchCollection: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setIsGettingStarted: ( state, action ) => {
            state.isGettingStarted = action.payload;
        },
        setIsWatchCollection: ( state, action ) => {
            state.isWatchCollection = action.payload;
        }
    }
});

export const { setIsGettingStarted, setIsWatchCollection } = uiSlice.actions;
export default uiSlice.reducer;