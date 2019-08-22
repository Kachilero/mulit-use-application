/**
 * Global actions such as isMobile
 */
export enum GlobalActionsTypeKeys {
  IS_MOBILE = 'IS_MOBILE',
  DUMMY_ACTION = 'DUMMY_ACTION'
}
interface IsMobileAction {
  type: GlobalActionsTypeKeys.IS_MOBILE;
}
interface DummyAction {
  type: GlobalActionsTypeKeys.DUMMY_ACTION;
}
export type GlobalActionsTypes = IsMobileAction | DummyAction;

export function isMobileToggle() {
  return {
    type: GlobalActionsTypeKeys.IS_MOBILE
  };
}
export function dummyActionToggle() {
  return {
    type: GlobalActionsTypeKeys.DUMMY_ACTION
  };
}

export default { isMobileToggle, dummyActionToggle };
