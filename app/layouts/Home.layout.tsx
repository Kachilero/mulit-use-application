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

interface homeState {}
interface homeProps {}

class HomeLayout extends Component<homeProps, homeState> {
  state: homeState;
  constructor(props: homeProps) {
    super(props);
  }

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
    return (
      <div id="main-child-wrapper">
        <Sidedrawer {...this.props} routes={homeRoutes} headline="Home" />
        <main role="main" id="main-window" className="flex-shrink-0 pd__large">
          <Switch>{this.getRoutes(homeRoutes)}</Switch>
        </main>
      </div>
    );
  }
}

export default connect()(HomeLayout);
