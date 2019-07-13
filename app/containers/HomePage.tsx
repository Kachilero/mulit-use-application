import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainWindow from '../components/MainWindow';

import { isSideDrawerOpenAction } from '../store/sideDrawer/sideDrawer.actions';

export interface SideDrawerState {
  sideDrawer: boolean;
}

function mapStateToProps(state: SideDrawerState) {
  return {
    sideDrawer: state.sideDrawer
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(isSideDrawerOpenAction, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWindow);
