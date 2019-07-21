/**
 * Home Page Layout
 * This is the entry layout for the app
 */
import * as React from 'react';
import { Component } from 'react';

import { homeRoutes } from '../constants/routes/homeRoutes';
import { Route, Switch } from 'react-router-dom';
import SideDrawer from '../components/global/Sidedrawer';

interface homeState {
  isSideDrawerOpen: boolean;
}
interface homeProps {
  sideDrawerToggle: boolean;
  onSideDrawerClick: () => void;
}

class HomeLayout extends Component<homeProps, homeState> {
  state: homeState;
  constructor(props: homeProps) {
    super(props);
    this.state = {
      isSideDrawerOpen: this.props.sideDrawerToggle
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

  onPropChange = () => {
    this.setState(prevState => ({
      isSideDrawerOpen: this.props.sideDrawerToggle
    }));
  };

  componentDidUpdate(
    prevProps: Readonly<homeProps>,
    prevState: Readonly<homeState>,
    snapshot?: any
  ): void {
    // Make sure we're at the top of the page when we navigate between views
    window.scrollTo(0, 0);
    if (prevProps.sideDrawerToggle !== this.props.sideDrawerToggle) {
      this.onPropChange();
    }
  }

  // TODO Re-work this so it works like Notion website

  render() {
    const mainClass: string = this.state.isSideDrawerOpen
      ? 'main_main sd-open'
      : 'main_main';
    return (
      <div id="main-child-wrapper">
        <SideDrawer
          {...this.props}
          routes={homeRoutes}
          headline="Home"
          isOpen={this.state.isSideDrawerOpen}
          onClick={this.handleClick().bind(this)}
        />
        <main role="main" id="main-window" className={mainClass}>
          <Switch>{this.getRoutes(homeRoutes)}</Switch>
        </main>
      </div>
    );
  }
}

export default HomeLayout;
