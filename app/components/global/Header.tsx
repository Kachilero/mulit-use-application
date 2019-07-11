/**
 * Header component to be re-used on every page
 * */
import * as React from 'react';
import { Component } from 'react';
import { Navbar } from 'react-bootstrap';

const userDefaults = require('../../constants/userDefaults.json');

type Props = {};

export default class Header extends Component<Props> {
  props: Props;

  render() {
    return (
      <Navbar
        bg={userDefaults.default.Navbar.bg}
        variant={userDefaults.default.Navbar.variant}
        fixed={userDefaults.default.Navbar.fixed}
      >
        <div className="container-fluid">
          <Navbar.Brand>Multi Use App</Navbar.Brand>
        </div>
      </Navbar>
    );
  }
}
