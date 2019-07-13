/**
 * Actions for the side drawer
 */
export enum SideDrawerTypeKeys {
  FLIP_SIDEBAR_STATE = 'FLIP_SIDEBAR_STATE',
  ADD_ACTIVE_CLASS = 'ADD_ACTIVE_CLASS'
}

interface flipSidebarStateAction {
  type: SideDrawerTypeKeys.FLIP_SIDEBAR_STATE;
}

interface addActiveClassAction {
  type: SideDrawerTypeKeys.ADD_ACTIVE_CLASS;
}

export type SideDrawerTypes = flipSidebarStateAction | addActiveClassAction;

export function flipSidebarState() {
  return {
    type: SideDrawerTypeKeys.FLIP_SIDEBAR_STATE
  };
}

export function addActiveClass() {
  return {
    type: SideDrawerTypeKeys.ADD_ACTIVE_CLASS
  };
}

export default { flipSidebarState, addActiveClass };
