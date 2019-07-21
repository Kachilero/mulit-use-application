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

class SideDrawer extends Component<Props> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.onCollapse = this.onCollapse.bind(this);
  }

  // handles click event
  onCollapse = () => {
    this.props.onClick();
  };

  render() {
    const activeClass = this.props.isOpen ? 'active' : '';
    return (
      <div id="sidebar" className={activeClass}>
        <Nav id="sidebar__menu" className={`sidebar ${activeClass}`}>
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
                this.onCollapse();
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
