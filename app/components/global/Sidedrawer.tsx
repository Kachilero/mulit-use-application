/**
 * Side Drawer Component
 */
import * as React from 'react';
import { Component } from 'react';
import { Nav } from 'react-bootstrap';
import SideDrawerNavLinks from './SideDrawerNavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHome } from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';

interface State {}
interface Props {
  routes: any;
  headline: string;
  isOpen: boolean;
  onClick: () => void;
}

class Sidedrawer extends Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
  }

  render() {
    const sideBarClass: string = this.props.isOpen
      ? 'sidebar active'
      : 'sidebar';

    return (
      <Nav id="sidebar" className={sideBarClass}>
        <div className="sidebar-header">
          <FontAwesomeIcon
            icon={faHome}
            className="d-inline-block sidebar-header__icon"
          />
          <div className="d-inline-block sidebar-header__headline">
            <h4 className="text-center">{this.props.headline}</h4>
          </div>
          <a
            href="#"
            className="sidebar-header__link"
            onClick={this.props.onClick}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
        </div>
        {/* Sidebar links go here */}
        <div id="components">
          {/*<Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <FontAwesomeIcon icon={faHome} />
                <span>Home Group</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul>
                    <SideDrawerNavLinks
                      {...this.props}
                      routes={this.props.routes}
                    />
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>*/}
          <SideDrawerNavLinks
            {...this.props}
            routes={this.props.routes}
            as="div"
          />
        </div>
      </Nav>
    );
  }
}

export default Sidedrawer;
