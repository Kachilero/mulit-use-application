/**
 * AdminLayout layout
 *
 * We're gonna try something different
 */
import * as React from 'react';
import { Component } from 'react';

import { connect } from 'react-redux';

import { adminRoutes } from '../utils/routes/adminRoutes';
import { Route, Switch } from 'react-router-dom';
import Sidedrawer from '../components/global/Sidedrawer';

interface adminState {
  isSideDrawerOpen: boolean;
}
interface adminProps {}

// Faking it here
type AppState = {
  stateOne;
  stateTwo;
};

class AdminLayout extends Component<adminProps, adminState> {
  state: adminState;
  constructor(props: adminProps) {
    super(props);
    this.state = {
      isSideDrawerOpen: true
    };
  }

  getRoutes = adminRoutes => {
    return adminRoutes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          render={props => <prop.component {...props} />}
          key={key}
        />
      );
    });
  };

  toggleSidebar = () => {
    return (): void => {
      console.log(`Click: ${this.state.isSideDrawerOpen}`);
      this.setState({ isSideDrawerOpen: !this.state.isSideDrawerOpen });
    };
  };

  // TODO: change the render to call the switch right after main
  render() {
    return (
      <div id="main-child-wrapper">
        <Sidedrawer
          {...this.props}
          routes={adminRoutes}
          headline="Admin"
          isOpen={this.state.isSideDrawerOpen}
          onClick={this.toggleSidebar}
        />
        <main role="main" id="main-window" className="main_main">
          <Switch>{this.getRoutes(adminRoutes)}</Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  stateOne: state.stateOne,
  stateTwo: state.stateTwo
});

export default connect(mapStateToProps)(AdminLayout);
