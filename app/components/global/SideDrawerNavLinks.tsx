/**
 * Creates Nav Links for the Side Drawer
 *
 */
import * as React from 'react';
import { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface State {}

interface Props {
  routes: any;
  as?: string;
}

class SideDrawerNavLinks extends Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
  }

  render() {
    console.log('Children');
    console.log(this.props.as);
    return (
      <>
        {this.props.routes.map((props, key) => {
          return (
            <div className="item" key={key}>
              <Nav.Link
                as={NavLink}
                to={props.layout + props.path}
                className="sidebar__nav-link"
              >
                {props.name}
              </Nav.Link>
            </div>
          );
        })}
      </>
    );
  }
}

export default SideDrawerNavLinks;
