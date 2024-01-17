import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Navigation from './navigation';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Your Name</Navbar.Brand>
        <Navigation />
      </Container>
    </Navbar>
  );
};

export default Header;

