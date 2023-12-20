import React, { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "/src/img/logo3.svg";

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
      <Navbar fixed="top" expand="lg" className="fixed-top bg-dark navbar-dark" expanded={expanded}>
        <Container>
          <Navbar.Brand className="ml-auto">
            <Link href="/">
              <Image alt="" src={logo} width="200" height="50" className="d-inline-block align-top" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/"} onClick={handleNavItemClick}>
                  Home
                </Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/about"} onClick={handleNavItemClick}>
                  About
                </Nav.Link>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/contact"} onClick={handleNavItemClick}>
                  Contact
                </Nav.Link>
              </Link>
              <Link href="/portfolio" passHref legacyBehavior>
                <Nav.Link active={router.pathname === "/portfolio"} onClick={handleNavItemClick}>
                  Portfolio
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
