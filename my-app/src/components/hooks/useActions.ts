import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { changeThemeAction } from '../../store/action-creators/theme';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(changeThemeAction, dispatch)
}