import { AnyAction } from "redux";
import { ThemeAction } from "../types/theme";

export const changeThemeAction = ():ThemeAction => ({
    type: 'CHANGE_THEME',
})

