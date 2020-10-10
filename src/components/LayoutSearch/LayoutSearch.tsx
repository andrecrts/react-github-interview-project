import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LayoutSearch: React.FC<{}> = ({ children }) => (
  <Container>
    <Row>
      <Col md={3} sm={4} xs={12}>
        <Nav className="flex-column" defaultActiveKey="/" variant="pills">
          <Link component={Nav.Link} to="/">
            Repository
          </Link>
          <Link component={Nav.Link} to="/user">
            User
          </Link>
        </Nav>
      </Col>
      <Col>{children}</Col>
    </Row>
  </Container>
);

export default LayoutSearch;
