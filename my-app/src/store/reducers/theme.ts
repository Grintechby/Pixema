import { createSlice } from "@reduxjs/toolkit"
import { ThemeState } from "../types/theme"



const userTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const activeTheme = localStorage.getItem('theme') || userTheme;

const initialState: ThemeState = {
    theme: activeTheme,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

// const initialState: ThemeState = {
//     isDarkTheme: false
// }


// export const themeReducer = (state = initialState, action: ThemeAction) => {
//     switch (action.type) {
//         case 'CHANGE_THEME':
//             return { ...state, isDarkTheme: !state.isDarkTheme }
//         default:
//             return state
//     }
// }
