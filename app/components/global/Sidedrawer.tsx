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
  hover: boolean;
}
interface Props {
  routes: any;
  headline: string;
  onClick: () => void;
  sideDrawerReducer: {
    [key: string]: boolean;
  };
}

class SideDrawer extends Component<Props> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.onCollapse = this.onCollapse.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      hover: false
    };
  }

  // handles click event
  onCollapse = () => {
    this.props.onClick();
  };

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const activeClass = this.props.sideDrawerReducer.isOpen ? 'active' : '';
    const hoverClass =
      this.props.sideDrawerReducer.hoverState || this.state.hover
        ? 'active'
        : '';

    return (
      <div id="sidebar" className={activeClass}>
        <div id="inmovable-object">
          <Nav
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            id="sidebar__menu"
            className={`sidebar ${activeClass} ${hoverClass}`}
          >
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
      </div>
    );
  }
}

export default SideDrawer;
