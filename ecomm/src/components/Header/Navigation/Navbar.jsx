import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
// import * as Icon from 'react-bootstrap-icons';
import Icon from './Icon';

const Navbar = () => {
  return (
    <Container>
      <Row>
        <Col>Need help? Call us: (+98) 0234 456 789</Col>
        <Col>
          <Col>Our store</Col>
          <Col>Track your order</Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;