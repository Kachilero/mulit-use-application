import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// import counter from './counter.reducer';
// Reducers
import sideDrawerReducer from '../store/sideDrawer/sideDrawer.reducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    sideDrawerReducer: sideDrawerReducer
    // counter: counter
  });
}
