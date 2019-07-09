/**
 * Main Window Component
 * This houses the main window elements
 * */
import * as React from 'react';
import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

// Components
import OgHome from './OgHome';
// import { addActiveClass, flipSideState } from '../actions/sideDrawer';

// Styles

// Prop and State
type Props = {
  flipSidebarState: () => void;
  addActiveClass: () => void;
};

/*type State = {
   headline: string
 }*/

export default class MainWindow extends Component<Props> {
  props: Props;

  render() {
    // const { flipSidebarState, addActiveClass } = this.props;
    // const { headline } = this.state;

    return (
      <div id="main-wrapper">
        {/* Sidedrawer will go here */}
        <main role="main" id="main-window" className="flex-shrink-0 pd__large">
          {/* Header Goes Here*/}
          <Row id="main-row">
            <div id="pg-content">
              <Row>
                <Col xl="10" md="9" xs="12" className="main-module">
                  <OgHome />
                </Col>
              </Row>
            </div>
          </Row>
        </main>
      </div>
    );
  }
}
