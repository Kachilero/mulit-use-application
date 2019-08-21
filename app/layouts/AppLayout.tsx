/**
 * Main entry that handles the header and the store
 *
 * */
import * as React from 'react';

import Header from '../components/global/Header';

type AppLayoutState = {
  dimensions: {
    width: number;
    height: number;
  };
};
export type AppLayoutProps = {
  children;
  sideDrawerReducer?: {
    [key: string]: boolean;
  };
  themeReducer?: {
    [key: string]: boolean;
  };
  toggleSideDrawer: () => void;
  sideDrawerHover: () => void;
};

const getInitState = (props: AppLayoutProps): AppLayoutState => {
  return {
    dimensions: null
  };
};

const classNames = require('classnames');

class AppLayout extends React.Component<AppLayoutProps> {
  readonly state = getInitState(this.props);
  private container: any;

  componentDidMount(): void {
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      }
    });
  }

  renderContent() {
    const mobileClass = classNames(
      this.state.dimensions.width > 767
        ? 'desktop'
        : this.state.dimensions.width < 600
        ? 'mobile'
        : 'tablet'
    );
    const {
      children,
      sideDrawerReducer,
      themeReducer,
      toggleSideDrawer,
      sideDrawerHover
    } = this.props;

    return (
      <div id="main-wrapper" className={mobileClass}>
        <Header
          theme={themeReducer.isLight}
          isOpen={sideDrawerReducer.isOpen}
          hoverState={sideDrawerReducer.hoverState}
          toggleSideDrawer={toggleSideDrawer}
          sideDrawerHover={sideDrawerHover}
        />
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }

  render() {
    const { dimensions } = this.state;

    return (
      <div ref={el => (this.container = el)}>
        {dimensions && this.renderContent()}
        {dimensions &&
          console.log(
            `Dimensions => W:${dimensions.width} H: ${dimensions.height}`
          )}
      </div>
    );
  }
}

export default AppLayout;
