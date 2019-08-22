/**
 * Reducer for Global actions
 */
import { GlobalActionsTypeKeys, GlobalActionsTypes } from './globalActions';
interface GlobalReducerState {
  isMobile: boolean;
  dummyAction: boolean;
}
const globalReducerInitState: GlobalReducerState = {
  isMobile: false,
  dummyAction: false
};

export default function(
  state = globalReducerInitState,
  action: GlobalActionsTypes
) {
  switch (action.type) {
    case GlobalActionsTypeKeys.IS_MOBILE:
      return {
        isMobile: !state.isMobile,
        dummyAction: state.dummyAction
      };
    case GlobalActionsTypeKeys.DUMMY_ACTION:
      return {
        isMobile: state.isMobile,
        dummyAction: !state.dummyAction
      };
    default:
      return state;
  }
}
