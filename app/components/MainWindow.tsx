/**
 * Main Window Component
 * This houses the main window elements
 * */
import * as React from 'react';
import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

// Components
import OgHome from './OgHome';
import Header from './global/Header';
import SideDrawer from './global/Sidedrawer';

// Actions
// import { addActiveClass, flipSideState } from '../actions/sideDrawer';

// Styles

// Prop and State
type Props = {
  sideDrawerOpen: boolean;
  flipSidebarState: () => void;
  addActiveClass: () => void;
};

/*type State = {
   headline: string
 }*/

export default class MainWindow extends Component<Props> {
  props: Props;

  render() {
    const { sideDrawerOpen } = this.props;
    let mainClass = sideDrawerOpen
      ? 'flex-shrink-0'
      : 'flex-shrink-0 pd__large';

    return (
      <div id="main-wrapper">
        <SideDrawer />
        <main role="main" id="main-window" className={mainClass}>
          <Header />
          <div id="main-row">
            {/* We'll replace the inner content here with the view switcher */}
            <div id="pg-content">
              <Row>
                <Col xl="10" md="9" xs="12" className="main-module">
                  <OgHome />
                </Col>
              </Row>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
