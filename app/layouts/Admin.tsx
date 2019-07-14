/**
 * Admin layout
 *
 * We're gonna try something different
 */
import * as React from 'react';
import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import { connect } from 'react-redux';

import { adminRoutes } from '../Routes';
import { Route, Switch } from 'react-router-dom';
import SecondSideBar from '../components/global/SecondSidBar';

interface adminState {}

interface adminProps {}

// Faking it here
type AppState = {
  stateOne;
  stateTwo;
};

class Admin extends Component<adminProps, adminState> {
  props: adminProps;
  state: adminState;

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

  render() {
    console.log('Admin State:');
    console.log(this.state);
    console.log('Admin Props');
    console.log(this.props);

    return (
      <div id="main-child-wrapper">
        <SecondSideBar {...this.props} routes={adminRoutes} />
        <main role="main" id="main-window" className="flex-shrink-0 pd__large">
          <div id="main-row">
            <div id="pg-conent">
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

export default connect(mapStateToProps)(Admin);
