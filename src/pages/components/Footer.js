import React from "react";
import { Container, Navbar } from "react-bootstrap";

/**
 * Footer component displaying copyright information.
 *
 * @returns {JSX.Element} React element representing the footer component.
 */
export default function Footer() {
  return (
    <Navbar expand="lg" className="fixed-bottom bg-dark navbar-dark custom-footer">
      <Container className="d-flex justify-content-center">
        <span className="text-white footer-text">© 2024 All rights reserved.</span> {/* Added small-text class */}
      </Container>
    </Navbar>
  );
}
