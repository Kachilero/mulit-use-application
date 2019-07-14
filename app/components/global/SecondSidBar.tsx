/**
 * Testing this with layout
 */
import * as React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

interface secondSideBarState {
  isSideBarOpen: boolean;
}

interface secondSideBarProps {
  routes: any;
}

class SecondSideBar extends Component<secondSideBarProps, secondSideBarState> {
  props: secondSideBarProps;
  state: secondSideBarState;
  constructor(props) {
    super(props);
    this.state = {
      isSideBarOpen: true
    };
  }

  render() {
    return (
      <Nav id="sidebar" className="sidebar active">
        <div className="sidebar-header">
          <div className="d-inline-block sidebar-header__headline">
            <h4>Second Side Bar</h4>
          </div>
        </div>
        {/* Build the nav */}
        {this.props.routes.map((prop, key) => {
          return (
            <div className="item" key={key}>
              <NavLink
                to={prop.layout + prop.path}
                className="nav-link"
                activeClassName="active"
              >
                <p>{prop.name}</p>
              </NavLink>
            </div>
          );
        })}
      </Nav>
    );
  }
}

const mapStateToProps = (state: secondSideBarState) => ({
  isSideBarOpen: state.isSideBarOpen
});

export default connect(mapStateToProps)(SecondSideBar);
