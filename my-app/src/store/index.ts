import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { themeReducer } from "./reducers/theme";

export const store = createStore(rootReducer)