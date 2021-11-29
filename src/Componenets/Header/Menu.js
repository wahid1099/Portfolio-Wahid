import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
const Menu = () => {
    return (
       <Navbar   expand="lg" style={{backgroundColor:'#000'}}>
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#aboutme"  className="text-white ps-5">About me</Nav.Link>
        <Nav.Link href="#myproject"  className="text-white ps-5">My Projects</Nav.Link>
        <Nav.Link href="#link"  className="text-white ps-5">Portfolio</Nav.Link>
        <Nav.Link href="#contactme"  className="text-white ps-5">Contact me</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Menu;