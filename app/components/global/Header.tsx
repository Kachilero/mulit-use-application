/**
 * Header component to be re-used on every page
 *
 * @function fCollapse = Library that handles memoization, but only returns the last value.
 *  In the function we pass both state.isSideDrawerOpen && props.isOpen
 *  We then change the local state to mirror the props and return
 *  the appropriate class for the ellipsis icon.
 *  @link https://github.com/alexreardon/memoize-one
 *
 * @function onCollapse = returns a function to the callback, so we can trigger
 *  the toggling of the side drawer.
 * */
import * as React from 'react';
import { Component } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
// Import static values
import mainRoutes from '../../constants/routes/mainRoutes';
// Import Header Widgets
import Timer from './header-widgets/timer/Timer';

type HeaderState = {
  bg: string;
  variant: 'light' | 'dark';
  fixed: 'top' | 'bottom';
};

type HeaderProps = {
  isOpen: boolean;
  hoverState: boolean;
  theme: boolean;
  toggleSideDrawer: () => void;
  sideDrawerHover: () => void;
};

const getInitState = (props: HeaderProps) => {
  return {
    bg: 'dark',
    variant: 'dark' as 'dark',
    fixed: 'top' as 'top',
    isLight: props.theme
  };
};

class Header extends Component<HeaderProps, HeaderState> {
  readonly state: HeaderState = getInitState(this.props);

  // Handles the click event
  onCollapse = () => {
    this.props.toggleSideDrawer();
  };

  handleMouse = () => {
    if (!this.props.hoverState) {
      setTimeout(() => {
        this.props.sideDrawerHover();
      }, 200);
    }
  };

  // Sets active class on link based on route
  static activeRoute(passedRoute) {
    return window.location.href.indexOf(passedRoute) > -1 ? 'active' : '';
  }

  static getDerivedStateFromProps(props, state) {
    if (props.theme !== state.theme) {
      if (props.theme) {
        return {
          bg: 'light',
          variant: 'light' as 'light'
        };
      } else {
        return {
          bg: 'dark',
          variant: 'dark' as 'dark'
        };
      }
    }
  }

  render() {
    const { isOpen } = this.props;
    const activeClass = isOpen ? '' : 'active';
    return (
      <Navbar
        bg={this.state.bg}
        variant={this.state.variant}
        fixed={this.state.fixed}
      >
        <div
          id="fa-container__hover"
          onMouseEnter={this.handleMouse}
          onMouseLeave={this.handleMouse}
        >
          <div
            onClick={this.onCollapse}
            className={`fa-container__header-ellipsis ${activeClass}`}
          >
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
        <Navbar.Brand>Multi Use App</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <NavDropdown id="header-nav-dropdown" title="Main Links">
            {mainRoutes.map((props, key) => {
              return (
                <NavDropdown.Item
                  key={key}
                  as={NavLink}
                  to={props.layout + props.path}
                  className={Header.activeRoute(props.layout + props.path)}
                >
                  {props.name}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
          <Timer />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
//@ts-ignore
export default Header;
