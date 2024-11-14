import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Navbar.Brand href="#" className="ml-3">Dashboard</Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Item>
          <Button variant="outline-primary" className="ml-3">
            Notifications
          </Button>
        </Nav.Item>

        <Nav.Item>
          <Button variant="outline-danger" className="ml-3">
            Logout
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Header;
