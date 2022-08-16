import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    limit: 50,
    type: 1
};

export const loadSlice = createSlice({
    name: 'load',
    initialState,
    reducers: {
        loadMoreMovies: (state, action) => {
            state.limit += 10;
            state.type = action.payload;
        },
    },
});

export const {loadMoreMovies} = loadSlice.actions;
export const loadReducer = loadSlice.reducer;