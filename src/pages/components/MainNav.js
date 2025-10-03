import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MainNav() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
  };
  const router = useRouter();
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark custom-navbar" expanded={expanded}>
        <Container>
          <Navbar.Brand className="ml-auto"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/"} onClick={handleNavItemClick} className="nav-link">
                  Home
                </Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/about"} onClick={handleNavItemClick} className="nav-link">
                  About
                </Nav.Link>
              </Link>
              <Link href="/portfolio" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/portfolio"} onClick={handleNavItemClick} className="nav-link">
                  Portfolio
                </Nav.Link>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/contact"} onClick={handleNavItemClick} className="nav-link">
                  Contact
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
