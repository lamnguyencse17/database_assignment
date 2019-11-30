import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Headnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      login: false,
      email: "",
      password: "",
    };
  }
  handleClose() {
    this.setState(state => ({
      register: false,
      login: false,
    }));
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmission() {
    if (this.state.register == true) {
      console.log("register");
    } else {
      console.log("login");
    }
  }
  render() {
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
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
            <Modal
              show={this.state.register || this.state.login}
              onHide={this.handleClose.bind(this)}>
              <Modal.Header closeButton>
                {this.state.register ? (
                  <Modal.Title>Sign up </Modal.Title>
                ) : (
                  <Modal.Title>Login </Modal.Title>
                )}
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formSignup">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      onChange={this.handleChange.bind(this)}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else
                    </Form.Text>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange.bind(this)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={this.handleClose.bind(this)}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={this.handleSubmission.bind(this)}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
            <Nav>
              <Nav.Link
                href="#signup"
                onClick={() => {
                  this.setState(state => ({
                    register: true,
                  }));
                }}>
                Sign Up Now
              </Nav.Link>
              <Nav.Link
                href="#login"
                onClick={() => {
                  this.setState(state => ({
                    login: true,
                  }));
                }}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Headnav;
