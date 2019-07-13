/**
 * Define Types for the side drawer
 */
export const OPEN_SIDE_DRAWER = 'OPEN_SIDE_DRAWER';

export interface IsSideDrawerOpen {
  sideDrawerOpen: boolean;
}

export interface IsSideDrawerOpenState {
  isItOpen: boolean;
}

interface openSideDrawerAction {
  type: typeof OPEN_SIDE_DRAWER;
  payload: IsSideDrawerOpen;
}

export type SideDrawerActionTypes = openSideDrawerAction;
