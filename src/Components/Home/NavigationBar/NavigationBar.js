import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Inzamum</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#certifications">Certifications</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
