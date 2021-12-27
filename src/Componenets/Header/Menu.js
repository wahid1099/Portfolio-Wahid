import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
       <Navbar   expand="lg"  style={{background:'#4568dc'}}>
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">

        <Nav.Link href=""  className=" ps-5 text-decoration-none">
        <Link to="/" className="text-decoration-none text-white">Home</Link>
        </Nav.Link>
        <Nav.Link href="#aboutme"  className="text-white ps-5">About me</Nav.Link>
        <Nav.Link  className="text-white ps-5"> <Link to="/myprojects" className="text-decoration-none text-white">My Projects</Link></Nav.Link>
        <Nav.Link  className="text-white ps-5"><Link to="/myblogs" className="text-decoration-none text-white" >My Blogs</Link></Nav.Link>
        <Nav.Link href="#contactme"  className="text-white ps-5">Contact me</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Menu;