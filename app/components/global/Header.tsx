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
import memoize from 'memoize-one';
import { Component } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
// Import static values
import mainRoutes from '../../constants/routes/mainRoutes';
const userDefaults = require('../../constants/userDefaults.json');

interface State {
  isSideDrawerOpen: boolean;
}

interface Props {
  isOpen: boolean;
  toggleSideDrawer: () => void;
}

class Header extends Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      isSideDrawerOpen: !this.props.isOpen
    };
  }

  // Here we ensure that state and props are in line with each other
  fCollapse = memoize((isOpen, SDOpen) => {
    this.setState({ isSideDrawerOpen: !isOpen });
    return SDOpen
      ? 'fa-container__header-ellipsis active'
      : 'fa-container__header-ellipsis';
  });

  // Handles the click event
  onCollapse = () => {
    return (): void => {
      this.setState({ isSideDrawerOpen: !this.state.isSideDrawerOpen });
      this.props.toggleSideDrawer();
    };
  };

  static activeRoute(passedRoute) {
    return window.location.href.indexOf(passedRoute) > -1 ? 'active' : '';
  }

  render() {
    const memoClass = this.fCollapse(
      this.props.isOpen,
      this.state.isSideDrawerOpen
    );

    return (
      <Navbar
        bg={userDefaults.default.Navbar.bg}
        variant={userDefaults.default.Navbar.variant}
        fixed={userDefaults.default.Navbar.fixed}
      >
        <div onClick={this.onCollapse()} className={memoClass}>
          <FontAwesomeIcon icon={faEllipsisV} />
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
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
