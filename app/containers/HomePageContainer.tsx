/**
 * Home Page Container
 *
 * Here we'll map the props and state that will be used by this page
 * as well as any children of this page
 * */
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
// Import universal actions
import toggleSideDrawerAction from '../store/sideDrawer/sideDrawer.actions';
// Import Layout
import HomeLayout from '../layouts/Home.layout';

export interface HomePageState {
  isSideDrawerOpen: boolean;
}

function mapStateToProps(state: HomePageState) {
  return {
    isSideDrawerOpen: state.isSideDrawerOpen
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(toggleSideDrawerAction, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeLayout);
