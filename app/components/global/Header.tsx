/**
 * Header component to be re-used on every page
 * */
import * as React from 'react';
import { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavLink from 'react-bootstrap/NavLink';

const routes = require('../../constants/routes.json');
const userDefaults = require('../../constants/userDefaults.json');

type Props = {};

export default class Header extends Component<Props> {
  props: Props;

  static activeRoute(passedRoute) {
    return window.location.href.indexOf(passedRoute) > -1 ? 'active' : '';
  }

  render() {
    return (
      <Navbar
        bg={userDefaults.default.Navbar.bg}
        variant={userDefaults.default.Navbar.variant}
        fixed={userDefaults.default.Navbar.fixed}
      >
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
