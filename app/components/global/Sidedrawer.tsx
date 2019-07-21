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
  activeClass: string;
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
    this.onCollapse = this.onCollapse.bind(this);
    this.state = {
      isOpen: this.props.isOpen,
      activeClass: this.props.isOpen ? 'active' : ''
    };
  }

  // handles click event
  onCollapse = () => {
    this.props.onClick();
  };

  // Changes active class in case props are changed by another componenet
  onPropChange = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      activeClass: !prevState.isOpen ? 'active' : ''
    }));
  };

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.onPropChange();
    }
  }

  render() {
    return (
      <div id="sidebar" className={this.state.activeClass}>
        <Nav id="sidebar__menu" className={`sidebar ${this.state.activeClass}`}>
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
