import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { filtersReducer } from "./filters";
import { loadReducer } from "./load";
import { themeReducer } from "./theme";


export const rootReducer = combineReducers({
    theme: themeReducer,
    load: loadReducer,
    filters: filtersReducer,
    auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>