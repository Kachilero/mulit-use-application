/**
 * Reducers for the side drawer
 */
import { SideDrawerActionTypes, OPEN_SIDE_DRAWER } from './sideDrawerTypes';

export function sideDrawerReducer(
  state: boolean = true,
  action: SideDrawerActionTypes
): boolean {
  console.log(`Side Drawer Reducer: ${state}`);
  switch (action.type) {
    case OPEN_SIDE_DRAWER:
      return !state;
    default:
      return state;
  }
}
