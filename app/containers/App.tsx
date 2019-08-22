import { connect } from 'react-redux';
import AppLayout from '../layouts/AppLayout';
import {
  sideDrawerHover,
  toggleSideDrawer
} from '../store/sideDrawer/sideDrawer.actions';
import { isMobileToggle } from '../store/global/globalActions';
import { Dispatch } from 'redux';

export interface AppState {}

function mapStateToProps(state: AppState) {
  return {
    ...state
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleSideDrawer: () => {
      dispatch(toggleSideDrawer());
    },
    sideDrawerHover: () => {
      dispatch(sideDrawerHover());
    },
    isMobileToggle: () => {
      dispatch(isMobileToggle());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
