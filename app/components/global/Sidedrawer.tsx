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

interface State {
  isOpen: boolean;
}
interface Props {
  routes: any;
  headline: string;
  isOpen: boolean;
  onClick: () => void;
}

class SideDrawer extends Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen
    };
  }

  render() {
    const sideBarClass: string = this.props.isOpen
      ? 'sidebar active'
      : 'sidebar';

    return (
      <div id="sidebar">
        <Nav id="sidebar__menu" className={sideBarClass}>
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
              onClick={e => {
                e.preventDefault();
                this.setState({ isOpen: !this.state.isOpen });
                this.props.onClick();
              }}
            >
              <div className="fa-container__sidebar-header__chevron-left">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </a>
          </div>
          {/* Sidebar links go here */}
          <div id="components">
            <SideDrawerNavLinks
              {...this.props}
              routes={this.props.routes}
              as="div"
            />
          </div>
        </Nav>
      </div>
    );
  }
}

export default SideDrawer;
