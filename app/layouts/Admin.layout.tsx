/**
 * AdminLayout layout
 *
 * We're gonna try something different
 */
import * as React from 'react';
import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import { connect } from 'react-redux';

import { adminRoutes } from '../utils/routes/adminRoutes';
import { Route, Switch } from 'react-router-dom';
import Sidedrawer from '../components/global/Sidedrawer';

interface adminState {}
interface adminProps {}

// Faking it here
type AppState = {
  stateOne;
  stateTwo;
};

class AdminLayout extends Component<adminProps, adminState> {
  state: adminState;
  constructor(props: adminProps) {
    super(props);
  }

  getRoutes = adminRoutes => {
    return adminRoutes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          render={props => <prop.component {...props} />}
          key={key}
        />
      );
    });
  };
  // TODO: change the render to call the switch right after main
  render() {
    return (
      <div id="main-child-wrapper">
        <Sidedrawer {...this.props} routes={adminRoutes} headline="Admin" />
        <main role="main" id="main-window" className="flex-shrink-0 pd__large">
          <div id="main-row">
            <div id="pg-content">
              <Row>
                <Col md={12}>
                  <Switch>{this.getRoutes(adminRoutes)}</Switch>
                </Col>
              </Row>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  stateOne: state.stateOne,
  stateTwo: state.stateTwo
});

export default connect(mapStateToProps)(AdminLayout);
