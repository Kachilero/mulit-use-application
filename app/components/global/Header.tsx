/**
 * Header component to be re-used on every page
 * */
import * as React from 'react';
import { Component } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import mainRoutes from '../../constants/routes/mainRoutes';

// const routes = require('../../constants/routes.json');
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

function mapStateToProps(state: State) {
  return {
    collapse: state.collapse
  };
}

export default connect(mapStateToProps)(Header);
