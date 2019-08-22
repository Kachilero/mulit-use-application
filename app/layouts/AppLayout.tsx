/**
 * Main entry that handles the header, the store and adding body classes
 *
 * */
import * as React from 'react';

import Header from '../components/global/Header';

type AppLayoutState = {
  dimensions: {
    width: number;
    height: number;
  };
  containerClass: string;
};
export type AppLayoutProps = {
  children;
  globalReducer?: {
    isMobile: boolean;
  };
  isMobileToggle: () => void;
  sideDrawerHover: () => void;
  sideDrawerReducer?: {
    isOpen: boolean;
    hoverState: boolean;
  };
  themeReducer?: {
    isLight: boolean;
  };
  toggleSideDrawer: () => void;
};

const getInitState = (props: AppLayoutProps): AppLayoutState => {
  return {
    dimensions: null,
    containerClass: ''
  };
};

class AppLayout extends React.Component<AppLayoutProps> {
  readonly state = getInitState(this.props);
  private container: any;

  componentDidMount(): void {
    window.addEventListener('resize', this.addMobileClass.bind(this));
    this.addMobileClass();
  }

  addMobileClass() {
    let isOpen = this.props.sideDrawerReducer.isOpen;
    let isMobile = this.props.globalReducer.isMobile;
    let width = this.container.offsetWidth;
    let mobileClassName = '';
    if (width > 768) {
      mobileClassName = 'desktop';
      if (!isOpen) this.props.toggleSideDrawer();
    } else if (width > 576) {
      mobileClassName = 'tablet';
      if (isOpen) this.props.toggleSideDrawer();
      if (!isMobile) this.props.isMobileToggle();
    } else {
      mobileClassName = 'mobile';
      if (isOpen) this.props.toggleSideDrawer();
      if (!isMobile) this.props.isMobileToggle();
    }
    this.setState({
      containerClass: mobileClassName,
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      }
    });
  }

  renderContent() {
    const mobileClass = this.state.containerClass;
    const {
      children,
      globalReducer,
      sideDrawerHover,
      sideDrawerReducer,
      themeReducer,
      toggleSideDrawer
    } = this.props;

    return (
      <div id="main-wrapper" className={mobileClass}>
        <Header
          hoverState={sideDrawerReducer.hoverState}
          isOpen={sideDrawerReducer.isOpen}
          isMobile={globalReducer.isMobile}
          theme={themeReducer.isLight}
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
      </div>
    );
  }
}

export default AppLayout;
