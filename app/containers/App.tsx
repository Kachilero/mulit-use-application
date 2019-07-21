import { connect } from 'react-redux';
import AppLayout from '../layouts/AppLayout';
import { toggleSideDrawer } from '../store/sideDrawer/sideDrawer.actions';
import { Dispatch } from 'redux';

export interface AppState {
  // true: open / false: closed
  sideDrawerToggle: boolean;
}

function mapStateToProps(state: AppState) {
  return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleSideDrawer: () => {
      dispatch(toggleSideDrawer());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
