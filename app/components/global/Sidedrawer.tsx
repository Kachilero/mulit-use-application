/**
 * Side Drawer Component
 */
import * as React from 'react';
import { Component } from 'react';
import { Accordion, Card, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import SideDrawerNavLinks from './SideDrawerNavLinks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
                  <ul>
                    <SideDrawerNavLinks routes={this.props.routes} as="li" />
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <SideDrawerNavLinks routes={this.props.routes} as="div" />
        </div>
      </Nav>
    );
  }
}

const mapStateToProps = (state: State) => ({
  isSideBarOpen: state.isSideBarOpen
});

export default connect(mapStateToProps)(Sidedrawer);
