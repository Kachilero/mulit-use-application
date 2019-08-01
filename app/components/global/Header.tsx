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
// const userDefaults = require('../../constants/userDefaults.json');
// Import Header Widgets
import Timer from './header-widgets/timer/Timer';

type State = {};

type Props = {
  isOpen: boolean;
  hoverState: boolean;
  theme: boolean;
  toggleSideDrawer: () => void;
  sideDrawerHover: () => void;
};

class Header extends Component<Props, State> {
  state: State;

  // Handles the click event
  onCollapse = () => {
    this.props.toggleSideDrawer();
  };

  handleMouse = () => {
    setTimeout(() => {
      this.props.sideDrawerHover();
    }, 200);
  };

  _userThemeOverrides = themeProp => {
    if (themeProp) {
      return {
        bg: 'light',
        variant: 'light',
        fixed: 'top'
      };
    }
    return {
      bg: 'dark',
      variant: 'dark',
      fixed: 'top'
    };
  };

  // Sets active class on link based on route
  static activeRoute(passedRoute) {
    return window.location.href.indexOf(passedRoute) > -1 ? 'active' : '';
  }

  render() {
    const {
      isOpen,
      // hoverState,
      theme
      // toggleSideDrawer,
      // sideDrawerHover,
    } = this.props;
    const activeClass = isOpen ? '' : 'active';
    return (
      <Navbar
        // TODO figure out how to tell TS that these value ARE FUCKING STRINGS!!!!
        // @ts-ignore
        bg={this._userThemeOverrides(theme).bg}
        // @ts-ignore
        variant={this._userThemeOverrides(theme).variant}
        // @ts-ignore
        fixed={this._userThemeOverrides(theme).fixed}
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
