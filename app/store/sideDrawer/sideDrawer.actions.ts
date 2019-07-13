/**
 * Actions for the side drawer
 */
import {
  IsSideDrawerOpen,
  OPEN_SIDE_DRAWER,
  SideDrawerActionTypes
} from './sideDrawerTypes';

export function isSideDrawerOpenAction(
  isIt: IsSideDrawerOpen
): SideDrawerActionTypes {
  return {
    type: OPEN_SIDE_DRAWER,
    payload: isIt
  };
}
