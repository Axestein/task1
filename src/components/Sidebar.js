import React from 'react';
import { Link } from 'react-router-dom'; 
import { Nav, Navbar } from 'react-bootstrap'; 

function Sidebar() {
  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh', width: '250px' }}>
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="#">Dashboard</Navbar.Brand>
      </Navbar>
      <Nav className="flex-column p-3">
        <Nav.Item>
          <Link to="/" className="nav-link text-white">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/profile" className="nav-link text-white">Profile</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/settings" className="nav-link text-white">Settings</Link>
        </Nav.Item>
        {/* Add more links as needed */}
      </Nav>
    </div>
  );
}

export default Sidebar;
