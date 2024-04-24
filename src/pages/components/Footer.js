import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <Navbar expand="lg" className="fixed-bottom bg-dark navbar-dark custom-footer">
      <Container className="d-flex justify-content-center">
        <span className="text-white footer-text">© 2024 Y.e.G. All rights reserved.</span> {/* Added small-text class */}
      </Container>
    </Navbar>
  );
}
