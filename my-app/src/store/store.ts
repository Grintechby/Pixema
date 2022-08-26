import { createStore } from "redux";
import { rootReducer, RootState } from "./reducers";
import { themeReducer } from "./reducers/theme";
import {configureStore, getDefaultMiddleware, PreloadedState} from '@reduxjs/toolkit';
import { useMemo } from "react";
import { pixemaApi } from "../api/api";
import { filtersReducer } from "./reducers/filters";
import { loadReducer } from "./reducers/load";
import { authReducer } from "./reducers/auth";
import { pixemaAuth } from "../api/auth";

// export const store = createStore(rootReducer)

let store: AppStore;

export const configStore = (preloadedState = {}) => {
    return configureStore({
        reducer: {
            theme: themeReducer,
            filters: filtersReducer,
            load: loadReducer,
            auth: authReducer,
            [pixemaApi.reducerPath]: pixemaApi.reducer,
            [pixemaAuth.reducerPath]: pixemaAuth.reducer
        },
        preloadedState,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(pixemaApi.middleware).concat(pixemaAuth.middleware)
    }); 
};

export const initializeStore = (preloadedState: PreloadedState<RootState>) => {
    let _store = store ?? configStore(preloadedState);
    if (preloadedState && store) {
        _store = configStore({...store.getState(), ...preloadedState})
    }

    if (typeof window === 'undefined') return _store;

    if (!store) store = _store;

    return _store;
};

export function useStore (initialState: RootState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store;
};

export type AppStore = ReturnType<typeof configStore>;
export type AppDispatch = AppStore['dispatch'];