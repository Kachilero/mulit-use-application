/**
 * Actions for the side drawer
 */
import {
  IsSideDrawerOpenState,
  OPEN_SIDE_DRAWER,
  SideDrawerActionTypes
} from './sideDrawerTypes';

export function isSideDrawerOpenAction(
  isIt: IsSideDrawerOpenState
): SideDrawerActionTypes {
  return {
    type: OPEN_SIDE_DRAWER,
    isItOpen: isIt
  };
}
