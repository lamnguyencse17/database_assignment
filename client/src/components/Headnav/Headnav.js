import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Headnav extends Component {
  render() {
    return (
      <div className="container-fluid" style={{"padding":0}}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">IT Source</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#jobs">All Jobs</Nav.Link>
              <Nav.Link href="#companies">Companies</Nav.Link>
              <Nav.Link href="#blog">Blogs</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#signup">Sign Up Now</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Headnav;
