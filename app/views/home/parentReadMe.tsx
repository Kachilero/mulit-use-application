/**
 * VIEW for parentReadMe page in Home layout
 */
import * as React from 'react';
import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import MarkdownRenderer from '../../components/MarkdownRenderer';

type State = {};
type Props = {};

class ParentReadMe extends Component<Props, State> {
  render() {
    const fileUrl = 'parentReadMe.md';
    return (
      <div id="main-row">
        <div id="page-content">
          <Container>
            <Row>
              <Col md={12} id="markdown-render">
                <MarkdownRenderer mdFilePath={fileUrl} escapeHtml={false} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ParentReadMe;
