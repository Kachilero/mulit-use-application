import { connect } from 'react-redux';
import AppLayout from '../layouts/AppLayout';
import { toggleSideDrawer } from '../store/sideDrawer/sideDrawer.actions';
import { Dispatch } from 'redux';

export interface AppState {
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

/*
ORIGINAL
import * as React from 'react';
import Header from '../components/global/Header';

export default class App extends React.Component {
  render() {
    const { children } = this.props;
    // return <React.Fragment>{children}</React.Fragment>;
    return (
      <div id="main-wrapper">
        <Header />
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
}
*/
