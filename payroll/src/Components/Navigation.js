import React, { Component } from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUser, getToken, removeUserSession } from "./../utils/Common";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div className="">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
            React-Payroll
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="col-sm-6">
              <Nav className="mr-auto">
                <Nav.Link href="/Dashboard" style={{ fontWeight: "bold" }}>
                  Dashboard
                </Nav.Link>
                <Nav.Link href="#link" style={{ fontWeight: "bold" }}>
                  Link
                </Nav.Link>
                <NavDropdown
                  title="Action"
                  id="basic-nav-dropdown"
                  style={{ fontWeight: "bold" }}
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  style={{ margin: 2 }}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
