import { combineReducers } from "redux";
import { themeReducer } from "./theme";

export const rootReducer = combineReducers({
    theme: themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>