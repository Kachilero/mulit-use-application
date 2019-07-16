/**
 * Home Page Layout
 * This is the entry layout for the app
 */
import * as React from 'react';
import { Component } from 'react';

import { connect } from 'react-redux';

import { homeRoutes } from '../utils/routes/homeRoutes';
import { Route, Switch } from 'react-router-dom';
import Sidedrawer from '../components/global/Sidedrawer';

interface homeState {
  isSideDrawerOpen: boolean;
}
interface homeProps {}

class HomeLayout extends Component<homeProps, homeState> {
  state: homeState;
  constructor(props: homeProps) {
    super(props);
    this.state = {
      isSideDrawerOpen: true
    };
  }

  // Maps the links to the switch
  getRoutes = passedRoutes => {
    return passedRoutes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          render={props => <prop.component {...props} />}
          key={key}
        />
      );
    });
  };

  // This handles the state of the sidebar
  handleClick = (e: any) => {
    return (elem: any = e): void => {
      elem.preventDefault();
      this.setState({ isSideDrawerOpen: !this.state.isSideDrawerOpen });
    };
  };

  componentDidMount(): void {
    // Make sure we're at the top of the page when we navigate between views
    window.scrollTo(0, 0);
  }

  componentDidUpdate(
    prevProps: Readonly<homeProps>,
    prevState: Readonly<homeState>,
    snapshot?: any
  ): void {
    // Make sure we're at the top of the page when we navigate between views
    window.scrollTo(0, 0);
  }

  render() {
    let e: any;
    const mainClass: string = this.state.isSideDrawerOpen
      ? 'flex-shrink-0 pd__large'
      : 'flex-shrink-0';
    return (
      <div id="main-child-wrapper">
        <Sidedrawer
          {...this.props}
          routes={homeRoutes}
          headline="Home"
          isOpen={this.state.isSideDrawerOpen}
          onClick={this.handleClick(e)}
        />
        <main role="main" id="main-window" className={mainClass}>
          <Switch>{this.getRoutes(homeRoutes)}</Switch>
        </main>
      </div>
    );
  }
}

export default connect()(HomeLayout);
