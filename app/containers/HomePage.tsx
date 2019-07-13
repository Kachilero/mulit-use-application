import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainWindow from '../components/MainWindow';
import SidebarActions from '../actions/sideDrawer.actions';

export interface MainWindowState {
  flipSidebarState: () => void;
  addActiveClass: () => void;
  headline: string;
}

function mapStateToProps(state: MainWindowState) {
  return {
    flipSidebarState: state.flipSidebarState,
    addActiveClass: state.addActiveClass,
    headline: state.headline
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(SidebarActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWindow);
