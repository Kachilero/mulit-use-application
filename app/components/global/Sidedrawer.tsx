/**
 * Side Drawer Component
 */
import * as React from 'react';
import { Component } from 'react';
import { Accordion, Card, Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const routes = require('../../constants/routes.json');

type Props = {};

export default class Sidedrawer extends Component<Props> {
  props: Props;

  render() {
    return (
      <Nav id="sidebar" className="active">
        <div className="sidebar-header">
          <div className="d-inline-block sidebar-header__headline">
            <h4>Headline</h4>
          </div>
        </div>
        {/* Sidebar links go here */}
        <div className="components">
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <FontAwesomeIcon icon={faHome} />
                <span>Home Group</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul className="list-unstyled">
                    <li>
                      <a href={`#${routes.HOME}`}>Home</a>
                    </li>
                    <li>
                      <a href={`#${routes.COUNTER}`}>Counter</a>
                    </li>
                    <li>
                      <a href="#">Home 3</a>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Nav>
    );
  }
}
