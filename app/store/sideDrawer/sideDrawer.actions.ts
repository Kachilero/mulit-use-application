/**
 * Actions for the side drawer
 */
export const TOGGLE_SIDE_DRAWER = 'TOGGLE_SIDE_DRAWER';

export function toggleSideDrawer() {
  return {
    type: TOGGLE_SIDE_DRAWER
  };
}

export default { toggleSideDrawer };
