import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          UkeTabz
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/tabs">
            Tabs
          </Nav.Link>
          <Nav.Link as={Link} to="/chords">
            Chords
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
