/**
 * About Page
 */
import * as React from 'react';
import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

type Props = {};

export default class About extends Component<Props> {
  props: Props;

  render() {
    return (
      <div id="main-child-wrapper">
        <main role="main" id="main-window" className="flex-shrink-0 pd__large">
          <div id="main-row">
            <div id="pg-content">
              <Row>
                <Col>
                  <h1>I AM ALL ABOUT THE ABOUT</h1>
                </Col>
              </Row>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
