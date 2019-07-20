/**
 * AdminLayout layout
 *
 * We're gonna try something different
 */
import * as React from 'react';
import { Component } from 'react';

import { adminRoutes } from '../constants/routes/adminRoutes';
import { Route, Switch } from 'react-router-dom';
import SideDrawer from '../components/global/Sidedrawer';

interface adminState {
  isSideDrawerOpen: boolean;
}
interface adminProps {
  sideDrawerToggle: boolean;
  onSideDrawerClick: () => void;
}

class AdminLayout extends Component<adminProps, adminState> {
  state: adminState;
  constructor(props: adminProps) {
    super(props);
    this.state = {
      isSideDrawerOpen: this.props.sideDrawerToggle
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

  handleClick = () => {
    return (): void => {
      this.setState({ isSideDrawerOpen: !this.state.isSideDrawerOpen });
      this.props.onSideDrawerClick();
    };
  };

  componentDidMount(): void {
    // Make sure we're at the top of the page when we navigate between views
    window.scrollTo(0, 0);
  }

  componentDidUpdate(
    prevProps: Readonly<adminProps>,
    prevState: Readonly<adminState>,
    snapshot?: any
  ): void {
    // Make sure we're at the top of the page when we navigate between views
    window.scrollTo(0, 0);
  }

  render() {
    const mainClass: string = this.state.isSideDrawerOpen
      ? 'main_main sd-open'
      : 'main_main';
    return (
      <div id="main-child-wrapper">
        <SideDrawer
          {...this.props}
          routes={adminRoutes}
          headline="Admin"
          isOpen={this.state.isSideDrawerOpen}
          onClick={this.handleClick()}
        />
        <main role="main" id="main-window" className={mainClass}>
          <Switch>{this.getRoutes(adminRoutes)}</Switch>
        </main>
      </div>
    );
  }
}

export default AdminLayout;
