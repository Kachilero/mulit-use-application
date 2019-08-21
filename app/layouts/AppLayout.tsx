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
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      }
    });
  }

  shouldComponentUpdate(
    nextProps: Readonly<AppLayoutProps>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    if (nextState !== this.state) {
      return true;
    }
  }

  addMobileClass() {
    let width = this.container.offsetWidth;
    let mobileClassName = '';
    if (width > 768) {
      mobileClassName = 'desktop';
    } else if (width > 576) {
      mobileClassName = 'tablet';
    } else {
      mobileClassName = 'mobile';
    }
    this.setState({
      containerClass: mobileClassName
    });
  }

  renderContent() {
    const mobileClass = this.state.containerClass;
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
      </div>
    );
  }
}

export default AppLayout;
