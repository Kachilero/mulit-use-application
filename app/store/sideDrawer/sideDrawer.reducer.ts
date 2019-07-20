/**
 * Reducers for the side drawer
 */
import { TOGGLE_SIDE_DRAWER } from './sideDrawer.actions';

export default function(state: boolean = true, action) {
  switch (action.type) {
    case TOGGLE_SIDE_DRAWER:
      return !state;
    default:
      return state;
  }
}
