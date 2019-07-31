/**
 * Reducer for switching themes
 */
import {
  ToggleThemeActionTypeKeys,
  ToggleThemeActionTypes
} from './themeAction';

interface ToggleThemeReducerState {
  isDark: boolean;
}

// This has to be false so that it is checked on init.
const ToggleThemeInitState: ToggleThemeReducerState = {
  isDark: false
};

export default function(
  state = ToggleThemeInitState,
  action: ToggleThemeActionTypes
) {
  if (action.type === ToggleThemeActionTypeKeys.TOGGLE_THEME) {
    console.log(`Theme Clicked`);
    return !state.isDark;
  }
  return state;
}
