import { combineReducers } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters";
import { loadReducer } from "./load";
import { themeReducer } from "./theme";

// export const rootReducer = combineReducers({
//     theme: themeReducer,
// })

export const rootReducer = combineReducers({
    theme: themeReducer,
    load: loadReducer,
    filters: filtersReducer,
})

export type RootState = ReturnType<typeof rootReducer>