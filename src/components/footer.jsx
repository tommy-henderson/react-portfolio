import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Text>&copy; 2024 Tommy Henderson</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
