/**
 * Reducers for the side drawer
 *  */
import { SideDrawerTypeKeys, SideDrawerTypes } from '../actions/sideDrawer.actions';

export default function sideDrawerToggle(
  state: boolean = true,
  action: SideDrawerTypes
) {
  switch (action.type) {
    case SideDrawerTypeKeys.ADD_ACTIVE_CLASS:
      return !state;
    case SideDrawerTypeKeys.FLIP_SIDEBAR_STATE:
      return !state;
    default:
      return state;
  }
}
