import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/PAKAI.png';
import './Top.css';

function Top() {
  return (
    <div>
        
<header id="App-header">
<Navbar expand="lg" className="bg-body-tertiary">
  <Container fluid>
    <Navbar.Brand href="/"><img id="Logo" src={logo} alt="PAKAI shop logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="./Todo">To-Do List</Nav.Link>
        <Nav.Link href="./Topfive">Top 5 Products</Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="./Jewellery">Jewellery</NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.2">
            Men's clothing
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Electronics</NavDropdown.Item> */}
          <NavDropdown.Divider />
          <NavDropdown.Item href="./Allproducts">
            All Products
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>

        </div>
  )
}

export default Top