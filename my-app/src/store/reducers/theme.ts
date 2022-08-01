import { ThemeAction, ThemeState } from "../types/theme"



const initialState: ThemeState = {
    isDarkTheme: false
}

export const themeReducer = (state = initialState, action: ThemeAction) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return { ...state, isDarkTheme: !state.isDarkTheme }
        default:
            return state
    }
}