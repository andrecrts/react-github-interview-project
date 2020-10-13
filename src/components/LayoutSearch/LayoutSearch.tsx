import React, { memo } from 'react';
import {
  Col, Container, Nav, Row,
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const LayoutSearch: React.FC<{ children?: React.ReactElement }> = ({ children }) => {
  const location = useLocation();
  return (
    <Container>
      <Row>
        <Col>
          <h2>Search</h2>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={4} xs={12}>
          <Nav className="flex-column" defaultActiveKey={location?.pathname ?? '/'} variant="pills">
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/" to="/">
                Repository
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/user" to="/user">
                User
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default memo(LayoutSearch);
