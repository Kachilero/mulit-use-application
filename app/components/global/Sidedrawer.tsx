/**
 * Side Drawer Component
 */
import * as React from 'react';
import { Component } from 'react';
import { Accordion, Card, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SideDrawerNavLinks from './SideDrawerNavLinks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const routesJSON = require('../../constants/routes.json');

interface State {
  isSideBarOpen: boolean;
}
interface Props {
  routes: any;
}

class Sidedrawer extends Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      isSideBarOpen: true
    };
  }

  buildNavLinks(routeMaps) {
    routeMaps.map((prop, key) => {
      return (
        <div className="item" key={key}>
          <Nav.Link
            as={NavLink}
            to={prop.layout + prop.path}
            className="sidebar__nav-links"
          >
            {prop.name}
          </Nav.Link>
        </div>
      );
    });
  }

  render() {
    return (
      <Nav id="sidebar" className="sidebar active">
        <div className="sidebar-header">
          <div className="d-inline-block sidebar-header__headline">
            <h4>Headline</h4>
          </div>
        </div>
        {/* Sidebar links go here */}
        <div className="components">
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <FontAwesomeIcon icon={faHome} />
                <span>Home Group</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul className="list-unstyled">
                    <li>
                      <a href={`#${routesJSON.HOME}`}>Home</a>
                    </li>
                    <li>
                      <a href={`#${routesJSON.COUNTER}`}>Counter</a>
                    </li>
                    <li>
                      <a href={`#${routesJSON.ABOUT}`}>About</a>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <SideDrawerNavLinks routes={this.props.routes} />
        </div>
      </Nav>
    );
  }
}

const mapStateToProps = (state: State) => ({
  isSideBarOpen: state.isSideBarOpen
});

export default connect(mapStateToProps)(Sidedrawer);
