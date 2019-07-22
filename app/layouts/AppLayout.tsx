/**
 * This will handle the main app layout so we can pass things to the store and back
 * */
import * as React from 'react';

import Header from '../components/global/Header';

export interface AppLayoutProps {
  children;
  sideDrawerReducer?: {
    [key: string]: boolean;
  };
  toggleSideDrawer: () => void;
  sideDrawerHover: () => void;
}

class AppLayout extends React.Component<AppLayoutProps> {
  render() {
    const {
      children,
      sideDrawerReducer,
      toggleSideDrawer,
      sideDrawerHover
    } = this.props;
    return (
      <div id="main-wrapper">
        <Header
          isOpen={sideDrawerReducer.isOpen}
          hoverState={sideDrawerReducer.hoverState}
          toggleSideDrawer={toggleSideDrawer}
          sideDrawerHover={sideDrawerHover}
        />
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
}

export default AppLayout;
