/**
 * Reducers for the side drawer
 */
import { SideDrawerActionTypes, OPEN_SIDE_DRAWER } from './sideDrawerTypes';

export function sideDrawerReducer(
  state: boolean = true,
  action: SideDrawerActionTypes
): boolean {
  switch (action.type) {
    case OPEN_SIDE_DRAWER:
      console.log(`OPEN_SIDE_DRAWER: ${state} && ${!state}`);
      return !state;
    default:
      console.log(`DEFAULT: ${state}`);
      return state;
  }
}
