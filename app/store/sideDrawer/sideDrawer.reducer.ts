/**
 * Reducers for the side drawer
 */
import {
  IsSideDrawerOpenState,
  SideDrawerActionTypes,
  OPEN_SIDE_DRAWER
} from './sideDrawerTypes';

const initialState: IsSideDrawerOpenState = {
  isItOpen: true
};

export function sideDrawerReducer(
  state = initialState,
  action: SideDrawerActionTypes
): boolean {
  console.log(`Side Drawer Reducer: ${state.isItOpen}`);
  // Since we only have one state at the moment we'll use an IF statement
  if (action.type === OPEN_SIDE_DRAWER) {
    return state.isItOpen;
  } else {
    return state;
  }
}
