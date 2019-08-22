import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import counter from '../store/counter/counter.reducer';
// Reducers
import sideDrawerReducer from '../store/sideDrawer/sideDrawer.reducer';
import themeReducer from '../store/theme/themeReducer';
import globalReducer from '../store/global/globalReducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    sideDrawerReducer: sideDrawerReducer,
    themeReducer: themeReducer,
    globalReducer: globalReducer,
    counter: counter
  });
}
