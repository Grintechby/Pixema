import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { changeThemeAction } from '../../store/action-creators/theme';
import { setTheme } from "../../store/reducers/theme";
import { AppDispatch } from "../../store/store";

// export const useActions = () => {
//     const dispatch = useDispatch();
//     return bindActionCreators(setTheme, dispatch)
// }

export const useActions = () => useDispatch<AppDispatch>()