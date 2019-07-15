import * as React from 'react';
import { Component } from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';

// Images
const npm = require('../../constants/img/npm.png');
const reactImg = require('../../constants/img/react.png');
const reactRouter = require('../../constants/img/reactRouter.png');
const redux = require('../../constants/img/redux.png');
const webpack = require('../../constants/img/webpack.png');
const reactBootstrap = require('../../constants/img/react-bootstrap.svg');
const ts = require('../../constants/img/ts.png');
const electron = require('../../constants/img/electron.png');

type State = {};
type Props = {};

const imageStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

class Home extends Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div id="main-row">
        <div id="pg-content">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h1 className="text-center mt-5">Electron React Multi Use App</h1>
              <p className="text-center">
                This is an implementation of several technologies which you can
                read about by following the links in the side bar. The main goal
                of this application was to create something using Electron that
                could possibly help people out.
              </p>
              <p className="text-center">
                I hope you can find thing that work for you here.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h2 className="text-center">
                Made with these great technologies
              </h2>
            </Col>
          </Row>

          <Container>
            <Row className="py-3">
              <Col sm={6} md={3} style={imageStyles}>
                <Image src={npm} fluid />
              </Col>
              <Col sm={6} md={3} style={imageStyles}>
                <Image src={reactImg} fluid />
              </Col>
              <Col sm={6} md={3} style={imageStyles}>
                <Image src={reactRouter} fluid />
              </Col>
              <Col sm={6} md={3} style={imageStyles}>
                <Image src={redux} fluid />
              </Col>
            </Row>

            <Row className="py-3">
              <Col sm={6} md={3} style={imageStyles}>
                <Image src={webpack} fluid />
              </Col>
              <Col sm={6} md={3} style={imageStyles}>
                <Image src={reactBootstrap} fluid style={{ maxWidth: '60%' }} />
              </Col>
              <Col sm={6} md={3} style={imageStyles}>
                <Image src={ts} fluid style={{ width: '130px' }} />
              </Col>
              <Col sm={6} md={3} style={imageStyles}>
                <Image src={electron} fluid />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

// Chande this to use connect if needed
export default Home;
