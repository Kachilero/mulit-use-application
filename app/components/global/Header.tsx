/**
 * Header component to be re-used on every page
 * */
import * as React from 'react';
import { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavLink from 'react-bootstrap/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const routes = require('../../constants/routes.json');
const userDefaults = require('../../constants/userDefaults.json');

interface State {
  collapse: boolean;
}

interface Props {}

class Header extends Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  onCollapse = () => {
    console.log(`Logging from Header`);
    this.setState({ collapse: !this.state.collapse });
  };

  static activeRoute(passedRoute) {
    return window.location.href.indexOf(passedRoute) > -1 ? 'active' : '';
  }

  render() {
    const ellipsisClass = this.state.collapse
      ? 'fa-container__header-ellipsis active'
      : 'fa-container__header-ellipsis';
    return (
      <Navbar
        bg={userDefaults.default.Navbar.bg}
        variant={userDefaults.default.Navbar.variant}
        fixed={userDefaults.default.Navbar.fixed}
      >
        <div onClick={this.onCollapse} className={ellipsisClass}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <Navbar.Brand>Multi Use App</Navbar.Brand>
        <NavbarToggle aria-controls="main-navbar-nav" />
        <NavbarCollapse id="main-navbar-nav">
          <NavLink
            href={`#${routes.HOME}`}
            className={Header.activeRoute(routes.HOME)}
          >
            Home
          </NavLink>
          <NavLink
            href={`#${routes.ADMIN}/home`}
            className={Header.activeRoute(routes.ADMIN)}
          >
            Admin
          </NavLink>
          <NavLink
            href={`#${routes.ABOUT}`}
            className={Header.activeRoute(routes.ABOUT)}
          >
            About
          </NavLink>
          <NavLink
            href={`#${routes.COUNTER}`}
            className={Header.activeRoute(routes.COUNTER)}
          >
            Counter
          </NavLink>
        </NavbarCollapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    collapse: state.collapse
  };
}

export default connect(mapStateToProps)(Header);
