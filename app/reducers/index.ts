import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter.reducer';
import sideDrawerToggle from '../store/sideDrawer/sideDrawer.reducer';
import { History } from 'history';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    sideDrawerToggle: sideDrawerToggle,
    counter: counter
  });
}
