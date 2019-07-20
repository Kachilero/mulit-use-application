/**
 * This will handle the main app layout so we can pass things to the store and back
 * */
import * as React from 'react';

import Header from '../components/global/Header';

export interface AppLayoutProps {
  children;
  sideDrawerToggle: boolean;
  toggleSideDrawer: () => void;
}

class AppLayout extends React.Component<AppLayoutProps> {
  render() {
    const { children, sideDrawerToggle, toggleSideDrawer } = this.props;
    return (
      <div id="main-wrapper">
        <Header isOpen={sideDrawerToggle} toggleSideDrawer={toggleSideDrawer} />
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
}

export default AppLayout;
